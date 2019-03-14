import React from "react";
import styled from "styled-components";

const FTWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row: 100px;
  > div {
    border: 1px solid gold;
  }
`;
const FT = styled.div`
  border: 2px solid orange;
  font-size: 22px;
  font-weight: 500;
`;

const Footer = props => (
  <FTWrap>
    <FT className="FT FT_Root1">FOOTER</FT>
    <FT className="FT FT_Root2">SOCIALS</FT>
  </FTWrap>
);

export default Footer;
