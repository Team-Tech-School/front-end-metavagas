import styled from "styled-components";

export const CardBackground = styled.div`
   background-color: #fff;
   width: 255px;
   padding: 25px 20px;
   border-radius: 10px;
   margin: 15px;
   cursor: pointer;
   transition: transform 0.3s ease;

   &:hover {
      transform: scale(1.05);
   }
`;

export const CardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const CardTitle = styled.div`
   color: ${({ theme }) => theme.colors.midGray};
   font-size: 12px;
`;

export const CardInfo = styled.div`
   color: ${({ theme }) => theme.colors.darkPurple};
   font-weight: 400;
   font-size: 16px;
`;
