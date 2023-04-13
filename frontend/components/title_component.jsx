import React from "react";
import Helmet from "react-helmet";

const TitleComponent = ({ title }) => {
  const defaultTitle = "DC: Denizen Confidant - electronic music online";
  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
    </Helmet>
  );
};

export { TitleComponent };
