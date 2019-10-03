import React from "react";
import styled from "styled-components";
import { Header, } from "semantic-ui-react";

export const StyledHeader = styled(Header)`
  font-size: ${ props => props.title ? "3rem" : "2rem" };
  color: white !important;
  font-family: 'Audiowide', cursive;
  letter-spacing: 3px;
  text-align: ${ props => props.centered ? "center" : "none" };
`;
