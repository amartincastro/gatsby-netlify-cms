import React from "react";
import PropTypes from "prop-types";
import format from "date-fns/format";

import BlogTemplate from "../../templates/Blog";

const BlogPreview = ({ entry }) => {
  const blog = entry.getIn(["data"]).toJS();
  const rawDate = blog.date;
  const formattedDate = format(rawDate, "MMMM Do YYYY @ h:mm A");
  return <BlogTemplate blog={{ ...blog, formattedDate, rawDate }} />;
};

BlogPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default BlogPreview;
