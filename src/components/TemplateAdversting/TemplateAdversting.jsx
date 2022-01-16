import React from "react";
import propTypes from "prop-types";
import "./TemplateAdversting.scss";

export default function TemplateAdversting({ children }) {
  return (
    <div className="containerAdversting">
      <p className="adversting">{children}</p>
    </div>
  );
}

TemplateAdversting.propTypes = {
  children: propTypes.node.isRequired,
};
