import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.mono200};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
