import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import isBefore from "date-fns/is_before";
import ReactMarkdown from "react-markdown";

import BlogTemplate from "./blog";
import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/past-blogs-page.scss";

export const PastBlogsPageTemplate = ({
  title,
  content,
  blogs = null,
  bodyIsMarkdown = false,
}) => {
  return (
    <article className="pastBlogs">
      <div className="container  pastBlogs-container">
        <h1 className="pastBlogs-title">{title}</h1>
        {bodyIsMarkdown ? (
          <ReactMarkdown className="pastBlogs-description" source={content} />
        ) : (
          <HTMLContent className="pastBlogs-description" content={content} />
        )}
        {blogs &&
          blogs.map((blog, index) => (
            <BlogTemplate
              key={index}
              className="pastBlogs-blog"
              Blog={blog.node.frontmatter}
            />
          ))}
      </div>
    </article>
  );
};

PastBlogsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  blogs: PropTypes.array,
};

const PastBlogsPage = ({ data }) => {
  const { markdownRemark: page } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;
  let blogs = data.allMarkdownRemark.edges;

  // Find all the blogs that occured in the past
  blogs = blogs.filter(blog => {
    return isBefore(blog.node.frontmatter.rawDate, new Date()) && blog;
  });

  return (
    <Layout footerData={data.footerData} navbarData={data.navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <PastBlogsPageTemplate
        title={page.frontmatter.title}
        content={page.html}
        blogs={blogs}
      />
    </Layout>
  );
};

PastBlogsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PastBlogsPage;

export const pastBlogsPageQuery = graphql`
  query PastBlogsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
    allMarkdownRemark(
      filter: { frontmatter: { presenters: { elemMatch: { text: { ne: null } } } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image
              text
              presentationTitle
              links {
                linkText
                linkURL
              }
            }
            location {
              name
            }
          }
        }
      }
    }
  }
`;
