import PropTypes from "prop-types";
import React from "react";

const Container = ({ children, className }) => {
  Container.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    className: PropTypes.string.isRequired
  };

  return <div className={className}>{children}</div>;
};

export default Container;
