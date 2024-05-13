import styled from "styled-components";

export const CardBackground = styled.div`
   background-color: ${({ theme }) => theme.colors.white};
   width: 260px;
   padding: 26px 25px;
   border-radius: 10px;
   margin: 15px;
`;

export const CardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const CardTitle = styled.div`
   color: ${({ theme }) => theme.colors.midGray};
   font-size: 13px;
`;

export const CardInfo = styled.div`
   color: ${({ theme }) => theme.colors.darkPurple};
   font-weight: 400;
   font-size: 16px;
`;
