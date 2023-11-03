import styled from "styled-components";

export const ButtonsContainer = styled.div<{ $singleButton?: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$singleButton ? "flex-end" : "space-between")};
  @media screen and (max-width: 600px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    left: 0;
    background-color: var(--white);
    padding: 15px;
  }
`;
