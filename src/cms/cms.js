import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import BlogPreview from "./preview-templates/BlogPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import PastBlogsPagePreview from "./preview-templates/PastBlogsPagePreview";

CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("pastBlogs", PastBlogsPagePreview);
