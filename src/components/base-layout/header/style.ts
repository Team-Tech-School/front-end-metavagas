import styled from "styled-components";

export const ContentWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   height: 20%;
`;

export const Logo = styled.img`
   padding-top: 10px;
   padding-left: 110px;
`;

export const PurpleBackground = styled.div`
   background-color: ${({ theme }) => theme.colors.darkPurple};
   box-shadow: ${({ theme }) => theme.shadows.lg};

`;

export const ButtonsWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-right: 30px;

   button {
      margin-right: 20px;
   }
`;
export const BlackLine = styled.div`
  height: 1px;
  width: 90%; /* Defina a largura que você deseja para a linha */
  background-color: black; 
  margin: 0 auto; /* Isso centralizará a linha horizontalmente */
`;