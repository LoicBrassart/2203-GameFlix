import styled from "styled-components";

export default styled.footer`
  box-sizing: border-box;
  border-top: 3px solid red;
  background-color: rgba(20, 20, 20, 0.9);
  color: white;

  display: flex;
  justify-content: space-between;
  height: 5vh;

  ul {
    display: flex;
    height: 100%;

    li {
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0 1em;
    }
  }
`;
