import propTypes from "prop-types";
import SButton from "./style";

export default function Button({ icon, cta, disabled, children, type }) {
  return (
    <SButton className={cta ? "cta" : ""} disabled={disabled} type={type}>
      {children}
      {icon && <img src={icon} alt="" />}
    </SButton>
  );
}

Button.propTypes = {
  icon: propTypes.string,
  cta: propTypes.bool,
  disabled: propTypes.bool,
  type: propTypes.string,
  children: propTypes.node.isRequired,
};
Button.defaultProps = {
  icon: null,
  cta: false,
  disabled: false,
  type: "button",
};
