import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const scopes = ["Roleet", "North Games"];
const modes = ["Light", "Dark"];
const spacing = ["Compact", "Cozy"];

export default function ThemeBuilder() {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState({
    scope: 0,
    mode: 0,
    spacing: 0,
    colorBlind: false,
    dyslexic: false,
  });

  const hChange = (evt) => {
    const key = evt.target.name;
    let { value } = evt.target;
    if (evt.target.type === "checkbox") {
      value = evt.target.checked;
    }
    setTheme({ ...theme, [key]: value });
  };

  useEffect(() => {
    let traits = [
      "Base",
      scopes[theme.scope],
      modes[theme.mode],
      spacing[theme.spacing],
    ];
    if (theme.colorBlind) traits.push("Color Blind");
    if (theme.dyslexic) traits.push("Dyslexic");

    dispatch({ type: "THEME_UPDATE", load: traits });
  }, [theme]);

  return (
    <form>
      <fieldset>
        <legend>Build your theme</legend>
        <label>
          <input
            name="scope"
            type="range"
            min="0"
            max={scopes.length - 1}
            value={theme.scope}
            onChange={hChange}
          />
          <span>Scope: {scopes[theme.scope]}</span>
        </label>
        <label>
          <input
            name="mode"
            type="range"
            min="0"
            max={modes.length - 1}
            value={theme.mode}
            onChange={hChange}
          />
          <span>Mode: {modes[theme.mode]}</span>
        </label>
        <label>
          <input
            name="spacing"
            type="range"
            min="0"
            max={spacing.length - 1}
            value={theme.spacing}
            onChange={hChange}
          />
          <span>Spacing: {spacing[theme.spacing]}</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Accessibility</legend>
        <label>
          <input
            name="colorBlind"
            type="checkbox"
            checked={theme.colorBlind}
            onChange={hChange}
          />
          <span>Colorblind</span>
        </label>
        <label>
          <input
            name="dyslexic"
            type="checkbox"
            checked={theme.dyslexic}
            onChange={hChange}
          />
          <span>Dyslexic</span>
        </label>
      </fieldset>
    </form>
  );
}
