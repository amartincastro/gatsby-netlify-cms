import React from "react";
import PropTypes from "prop-types";
import { PastBlogsPageTemplate } from "../../templates/past-blogs-page";

const PastBlogsPagePreview = ({ entry, widgetFor }) => {
  return (
    <PastBlogsPageTemplate
      title={entry.getIn(["data", "title"])}
      content={entry.getIn(["data", "body"])}
      bodyIsMarkdown={true}
    />
  );
};

PastBlogsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PastBlogsPagePreview;
