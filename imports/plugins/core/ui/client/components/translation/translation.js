import { camelCase } from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { registerComponent } from "@reaction/components";
import { i18next } from "/client/api";

const Translation = ({ i18nKey, defaultValue, className }) => {
  const key = i18nKey || camelCase(defaultValue);
  const translation = i18next.t(key, { defaultValue });

  return (
    <span className={className}>{translation}</span>
  );
};

Translation.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  i18nKey: PropTypes.string
};

registerComponent("Translation", Translation);

export default Translation;
