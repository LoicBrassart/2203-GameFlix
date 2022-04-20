import styled from "styled-components";

export default styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  pointer-events: none;

  &.open {
    opacity: 1;
    pointer-events: visible;

    .content {
      transform: translateY(0);
    }
  }

  .content {
    width: 50vw;
    background-color: white;
    transform: translateY(-200px);
    transition: all 0.4s ease-in-out;

    & > * {
      padding: 1em;
    }

    .main {
      border-top: 2px solid red;
      border-bottom: 2px solid red;
    }
  }
`;
