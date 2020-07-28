import styled, { css } from "styled-components";
import { Form, Field } from "formik";
import NumberFormat from "react-number-format";

const fieldStyling = css`
  border: 0;
  border-bottom: 2px solid var(--input-border-color);
  padding: 7px;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  ${fieldStyling}
`;

export const StyledSelect = styled.select`
  ${fieldStyling}
`;

export const StyledNumberFormat = styled(NumberFormat)`
  ${fieldStyling}
`;

export const FormError = styled.span`
  margin-left: 0.5rem;
  font-size: 90%;
  color: var(--danger-color);
`;
