import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const button = css`
  display: block;
  padding: 0.5em;
  border-radius: 10px;
  font-size: 120%;
  background: var(--attention-highlight);
  border: 0;
  cursor: pointer;
  text-align: center;
`;

export const LinkButton = styled(Link)`
  ${button}
`;

export const Button = styled.button`
  ${button}
`;

export const ClearButton = styled.button`
  background: unset;
  border: 0;
  color: unset;
  margin: 0;
  padding: 0;
`;
