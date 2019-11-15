import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/blog.scss";

import HeadshotPlaceholder from "../img/headshot-placeholder.svg";

class BlogTemplate extends Component {
  render() {
    return (
      <section
        className={`blog  ${this.props.className && this.props.className}`}
        key={this.props.blog.rawDate}
      >
        <h2 className="blog-title">{this.props.blog.title}</h2>
        <div className="blog-meta">
          <p className="blog-metaField  blog-metaField--date">
            <span className="blog-label">Date:</span> {this.props.blog.formattedDate}
          </p>
          <p className="blog-metaField  blog-metaField--location">
            <span className="blog-label">Location:</span> {this.props.blog.location.name}
          </p>
        </div>
        <div className="blog-presenters">
          {this.props.blog.presenters.map(presenter => (
            <div className="blog-presenter" key={presenter.name}>
              <div className="blog-presenterImageContainer">
                <img
                  className="blog-presenterImage"
                  src={presenter.image ? presenter.image : HeadshotPlaceholder}
                  alt={presenter.image ? presenter.name : "Default headshot placeholder"}
                />
                <span className="blog-presenterName">{presenter.name}</span>
              </div>
              <div className="blog-presenterInfo">
                {presenter.presentationTitle && (
                  <h3 className="blog-presenterTitle">{presenter.presentationTitle}</h3>
                )}
                <p className="blog-presenterText">{presenter.text}</p>
                <ul className="blog-presenterLinks">
                  {presenter.links &&
                    presenter.links.map((link, index) => (
                      <li key={index} className="blog-presenterLinkItem">
                        <a className="blog-presenterLink" href={link.linkURL}>
                          {link.linkText}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

BlogTemplate.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    presenters: PropTypes.array,
  }),
};

export default BlogTemplate;
