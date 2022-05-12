import propTypes from "prop-types";
import SInput from "./style";

export default function Input({ type, onChange, name, label }) {
  return (
    <SInput htmlFor={`input-${name}`}>
      {label || name}
      <input type={type} onChange={onChange} name={name} id={`input-${name}`} />
    </SInput>
  );
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string,
};
Input.defaultProps = {
  label: null,
};
