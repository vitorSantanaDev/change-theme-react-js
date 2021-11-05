import styled from "styled-components";

export const Container = styled.section`
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;
