import styled from "styled-components";

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 0.5px solid hsla(231, 11%, 63%, 70%);
  color: var(--marine-blue);
  font-size: 14px;
  font-weight: 600;

  &::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: hsla(231, 11%, 63%, 70%);
  }

  &:focus {
    border: 0.5px solid var(--purplish-blue);
    outline: none;
  }

  &:invalid {
    border: 0.5px solid var(--strawberry-red);
  }
`;
