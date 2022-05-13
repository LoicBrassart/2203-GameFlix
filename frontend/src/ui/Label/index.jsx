import propTypes from "prop-types";
import SLabel from "./style";

export default function Label({ htmlFor, children }) {
  return <SLabel htmlFor={htmlFor}>{children}</SLabel>;
}

Label.propTypes = {
  htmlFor: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};
