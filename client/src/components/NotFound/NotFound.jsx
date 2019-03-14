import React from "react";
import styled from "styled-components";
const NotF = styled.div`
  font-size: 66px;
  font-weight: 700;
  transform: skewX(-9deg);
  text-align: center;
`;
const NotFound = _ => <NotF>404!</NotF>;
export default NotFound;
