import styled from "styled-components";

const color = "orange";
const outline = "red";
const spaces = "1em";

export default styled.label`
  width: 12em;
  aspect-ratio: 9/2;
  margin: ${spaces};
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  border: 3px solid ${color};
  background-color: ${color};
  color: white;
  box-sizing: border-box;
  position: relative;
  :focus-within {
    outline: 2px solid ${outline};
  }

  input {
    width: 0.1px;
    height: 0.1px;
    overflow: hidden;
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  svg,
  img {
    position: absolute;
    right: 0;
    top: 0;
    aspect-ratio: 1/1;
    height: 100%;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    &.small {
      font-size: 0.8em;
    }
  }
`;
