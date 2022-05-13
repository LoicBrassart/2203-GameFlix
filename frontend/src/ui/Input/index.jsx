import propTypes from "prop-types";
import Button from "@ui/Button";
import Label from "@ui/Label";
import checked from "@assets/checked.svg";
import upload from "@assets/upload.svg";
import SInput from "./style";

export default function Input({ type, onChange, onClick, name, label, value }) {
  // Specific input types
  if (type === "button") {
    return <Button onClick={onClick}>{label || "Submit"}</Button>;
  }

  if (type === "reset") {
    return (
      <Button onClick={onClick} type="reset">
        {label || "Reset"}
      </Button>
    );
  }

  if (type === "submit") {
    return (
      <Button onClick={onClick} cta type="submit">
        {label || name}
      </Button>
    );
  }

  if (type === "hidden") {
    return <input type="hidden" name={name} value={value} />;
  }

  if (type === "color") {
    const icon = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 100">
        <circle cx="100" cy="50" r="75" fill={value} />
      </svg>
    );

    return (
      <Label htmlFor={`input-${name}`}>
        {label || "Color swap"}
        <input
          type="color"
          id={`input-${name}`}
          value={value}
          onChange={onChange}
          name={name}
        />
        {icon}
      </Label>
    );
  }

  if (type === "file") {
    return (
      <Label htmlFor={`input-${name}`}>
        <div>
          <p>{label || "Upload"}</p>
          <input
            type="file"
            id={`input-${name}`}
            value={value}
            onChange={onChange}
            name={name}
          />
          <p className="small">{value.split("\\").slice(-1) || "shrug"}</p>
        </div>
        <img src={value ? checked : upload} alt="" />
      </Label>
    );
  }

  // Default input types
  return (
    <SInput htmlFor={`input-${name}`} className={!value ? "empty" : "filled"}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={`input-${name}`}
      />
      <span>{label || name}</span>
    </SInput>
  );
}

Input.propTypes = {
  type: propTypes.string.isRequired,
  onChange: propTypes.func,
  onClick: propTypes.func,
  name: propTypes.string.isRequired,
  label: propTypes.string,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
};
Input.defaultProps = {
  label: null,
  value: null,
  onChange: () => {},
  onClick: () => {},
};
