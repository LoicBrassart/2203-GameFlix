import styled from "styled-components";

export default styled.label`
  position: relative;
  display: inline-block;
  width: 6em;
  height: 3em;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 1.5em;

    &:before {
      position: absolute;
      content: "";
      height: 2.5em;
      width: 2.5em;
      left: 0.25em;
      bottom: 0.25em;
      transition: 0.4s;
      background-color: rgba(20, 20, 20, 0.9);
      background-image: url(${(props) => props.logo});
      background-size: cover;
      border-radius: 50%;
    }
  }

  input:checked ~ span {
    background-color: #2196f3;
  }

  input:checked ~ span:before {
    transform: translateX(3em);
  }
`;
