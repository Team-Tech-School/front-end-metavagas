import styled from "styled-components";

export const CardBackground = styled.div`
   background-color: #fff;
   width: 15.94em; // Largura fixa para todos os cartões
   padding: 1.56em 1.25em;
   border-radius: 0.63em;
   text-size-adjust: initial;
   margin: 0.94em;
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
   font-size: 0.75em;
`;

export const CardInfo = styled.div`
   color: ${({ theme }) => theme.colors.darkPurple};
   font-weight: 400;
   font-size: 1em;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;
