import styled from "styled-components";

export default styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 2em;
    border: 0;
  }

  ul {
    position: absolute;
    top: 2em;
    left: 0;
    right: 0;
    flex-flow: column nowrap;

    li {
      background-color: white;
      color: black;
    }
  }
`;
