import styled from "styled-components";

export const FooterWrapper = styled.footer`
   bottom: 0;
   width: 100%;
`;

export const ContentDiv = styled.div`
   display: flex;
   align-items: start;
   justify-content: space-between;
   padding: 70px 20px 50px 20px;
`;

export const Logo = styled.img`
   padding-bottom: 130px;
   padding-left: 110px;
`;

export const PurpleBackground = styled.div`
   height: 22em;
   background-color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ButtonsDiv = styled.div`
   display: flex;

   justify-content: space-between;
   padding-right: 30px;

   button {
      margin-right: 20px;
   }
`;

export const LogoAndContactDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ContactAndAddressDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
   margin-left: 110px;
`;

export const Title = styled.div`
   color: ${({ theme }) => theme.colors.orange};
   font-size: 18px;
`;

export const Information = styled.div`
   color: ${({ theme }) => theme.colors.white};
   font-size: 16.5px;
   font-weight: ${({ theme }) => theme.fontWeight.middle};
`;
