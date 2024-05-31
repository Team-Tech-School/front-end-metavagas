import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   border: 0.06em solid ${({ theme }) => theme.colors.xtLightPurple};
   background-color: #fff;
   color: ${({ theme }) => theme.colors.xtLightPurple};
   padding: 0.38em 0.44em;
   border-radius: 0.44em;
   margin: 0em 0.31em;

   &:hover {
      border: 0.06em solid ${({ theme }) => theme.colors.orange};
      background-color: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.white};
   }

   &:active {
      background-color: ${({ theme }) => theme.colors.orange} !important;
      color: ${({ theme }) => theme.colors.white} !important;
   }
`;

export const Container = styled.div`
   display: flex;
   margin: 0.94em 2.19em 1.88em 2.19em;
`;

export const ContentDiv = styled.div`
   margin-left: 0.63em;
`;
