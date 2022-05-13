import styled from "styled-components";

const color = "orange";
const outline = "red";
const spaces = "1em";

export default styled.button`
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

  &.cta {
    font-weight: bold;
  }

  &:disabled {
    opacity: 60%;
  }
  :focus {
    outline: 2px solid ${outline};
  }

  img,
  svg {
    position: absolute;
    right: 0;
    top: 0;
    aspect-ratio: 1/1;
    height: 100%;
  }
`;
