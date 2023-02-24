import React from "react";
import { FormattedMessage } from "react-intl";

import "./Features.css";

const Features = () => {
  return (
    <div className="container border-bottom features" id="scrollspyHeading2">
      <div className="row row-cols-1 row-cols-lg-3 text-center align-items-start pb-3">
        
        <div className="feature col pt-2" id="feature1">
          <div className="pb-3 feature-icon d-inline-flex align-items-center justify-content-center mb-3">
            <i className="fa-solid fa-code fa-4x"></i>
          </div>
          <h3 className="fs-2 mb-4">
            <FormattedMessage
              id="features.title1"
              defaultMessage="Front End Developer"
            />
          </h3>
          <p className="text-muted mb-4">
            <FormattedMessage
              id="features.paragraph1"
              defaultMessage="Crafting custom web applications with responsive design, SEO and
            good user web experiences."
            />
          </p>
          <h4 className="feature-sub d-inline-flex align-items-center mb-4">
            <FormattedMessage
              id="features.subtitle"
              defaultMessage="Work with"
            />
          </h4>
          <p className="text-muted">
            <FormattedMessage
              id="features.subparagraph1"
              defaultMessage="HTML, CSS, Javascript, Typescript, Angular, Reactjs, JQuery, AJAX
            and API development."
            />
          </p>
        </div>
        <div className="feature col pt-2" id="feature2">
          <div className="pb-3 feature-icon d-inline-flex align-items-center justify-content-center mb-3">
            <i className="fa-solid fa-server fa-4x"></i>
          </div>
          <h3 className="fs-2 mb-4">
            <FormattedMessage
              id="features.title2"
              defaultMessage="Back End Developer"
            />
          </h3>
          <p className="text-muted mb-4 px-3">
            <FormattedMessage
              id="features.paragraph2"
              defaultMessage="Crafting custom web applications with responsive design, SEO and
            good user web experiences."
            />
          </p>
          <h4 className="feature-sub d-inline-flex align-items-center mb-4">
            <FormattedMessage
              id="features.subtitle"
              defaultMessage="Work with"
            />
          </h4>
          <p className="text-muted">
            <FormattedMessage
              id="features.subparagraph2"
              defaultMessage="NodeJs, Express, MongoDB, Firebase, Firestore and API development."
            />
          </p>
        </div>
        <div className="feature col pt-2" id="feature3">
          <div className="pb-3 feature-icon d-inline-flex align-items-center justify-content-center mb-3">
            <span className="icon-webflow-logo"></span>
          </div>
          <h3 className="fs-2 mb-4">
            <FormattedMessage
              id="features.title3"
              defaultMessage="Webflow Developer"
            />
          </h3>
          <p className="text-muted mb-4">
            <FormattedMessage
              id="features.paragraph3"
              defaultMessage="Crafting custom web applications with responsive design, SEO and
              good user web experiences."
            />
          </p>
          <h4 className="feature-sub d-inline-flex align-items-center mb-4">
            <FormattedMessage
              id="features.subtitle"
              defaultMessage="Work with"
            />
          </h4>
          <p className="text-muted">
            <FormattedMessage
              id="features.subparagraph3"
              defaultMessage="NodeJs, Express, MongoDB, Firebase, Firestore and API development."
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
