import styled from "styled-components";

export const ContentDiv = styled.div`
   width: 280px;
   height: 270px;
   padding: 40px;
   background-color: ${({ theme }) => theme.colors.lightPurple};
   border-radius: 15px;
`;

export const Number = styled.div`
   color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.div`
   color: ${({ theme }) => theme.colors.orange};
`;
