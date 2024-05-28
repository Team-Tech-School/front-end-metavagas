import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   border: 1px solid ${({ theme }) => theme.colors.xtLightPurple};
   background-color: #fff;
   color: ${({ theme }) => theme.colors.xtLightPurple};
   padding: 6px 7px;
   border-radius: 7px;
   margin: 0px 5px;

   &:hover {
      border: 1px solid ${({ theme }) => theme.colors.orange};
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
   margin: 15px 35px 30px 35px;
`;

export const ContentDiv = styled.div`
   margin-left: 10px;
`;
