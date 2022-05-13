import propTypes from "prop-types";
import SButton from "./style";

export default function Button({
  icon,
  cta,
  disabled,
  children,
  type,
  onClick,
}) {
  return (
    <SButton
      className={cta ? "cta" : ""}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
      {icon && typeof icon === "string" ? <img src={icon} alt="" /> : icon}
    </SButton>
  );
}

Button.propTypes = {
  icon: propTypes.oneOfType([propTypes.node, propTypes.string]),
  cta: propTypes.bool,
  disabled: propTypes.bool,
  type: propTypes.string,
  children: propTypes.node.isRequired,
  onClick: propTypes.func,
};
Button.defaultProps = {
  icon: null,
  cta: false,
  disabled: false,
  type: "button",
  onClick: () => {},
};
