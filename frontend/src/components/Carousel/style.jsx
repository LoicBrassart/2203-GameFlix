import styled from "styled-components";

export default styled.section`
  padding-top: 1em;
  position: relative;
  z-index: 0;

  .slide {
    aspect-ratio: 16/9;
    overflow: hidden;

    & > img {
      width: 100%;
    }
  }
`;
