import styled from "styled-components";

const color = "red";
const spaces = "1em";

export default styled.label`
  position: relative;
  width: 10em;
  aspect-ratio: 9/2;
  display: block;
  margin: ${spaces};

  span {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${spaces};
    width: 100%;
    cursor: text;
    transition: 0.1s linear all;
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }

  :focus-within span,
  &.filled span {
    color: ${color};
    font-size: 0.9em;
    top: -1.2em;
    bottom: 1.2em;
    width: max-content;
    padding-left: calc(${spaces} / 3);
    padding-right: calc(${spaces} / 3);
    z-index: 1;

    ::before {
      content: "";
      position: absolute;
      top: 1.2em;
      height: 0.2em;
      left: 0;
      right: 0;
      background-color: white;
      z-index: -1;
    }
  }

  input {
    padding: calc(${spaces} / 2);
    position: absolute;

    :focus {
      outline: none;
      border: 2px solid ${color};
    }
  }

  &.empty input:not(:focus) {
    color: white;
  }
`;
