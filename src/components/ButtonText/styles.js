import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  width: 7rem;
  
  display: flex;
  align-items: center;
  gap: .8rem;
  
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.PINK};
`;
