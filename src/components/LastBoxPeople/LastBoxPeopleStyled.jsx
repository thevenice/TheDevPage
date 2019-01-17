import styled from "styled-components";

const LastBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 2rem;
  div:nth-child(1) {
    background-color: gold;
  }
  div:nth-child(2) {
    background-color: goldenrod;
  }
`;
export { LastBox };
