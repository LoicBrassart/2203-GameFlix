import styled from "styled-components";

export default styled.section`
  & > div {
    width: 50em;
    margin: auto;
    padding: 1em 0;

    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1.5fr 1fr;
    gap: 1em 1em;
    grid-template-areas:
      "top-left top-left top top top-right top-right"
      "left left left right right right"
      "bottom-left bottom-left bottom bottom bottom-right bottom-right";

    .top-left {
      grid-area: top-left;
    }
    .top {
      grid-area: top;
    }
    .top-right {
      grid-area: top-right;
    }
    .left {
      grid-area: left;
    }
    .right {
      grid-area: right;
    }
    .bottom {
      grid-area: bottom;
    }
    .bottom-left {
      grid-area: bottom-left;
    }
    .bottom-right {
      grid-area: bottom-right;
    }

    .card {
      height: 10em;

      &.big {
        height: 15em;
      }

      article {
        height: 100%;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
  }
`;
