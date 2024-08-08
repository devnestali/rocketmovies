import styled from "styled-components";

export const Container = styled.div`
  width: 113.7rem;
`;

export const IsNotATag = styled.p`
  width: 100%;
  margin-top: 1.5rem;
  color: red;
`;

export const IsATag = styled.p`
  width: 100%;
  margin: 1.5rem 0 2rem 0;
  
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  text-overflow: ellipsis; 
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  overflow: hidden; 
`;