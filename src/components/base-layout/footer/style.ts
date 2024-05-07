import styled from "styled-components";

export const ContentWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 70px 20px 50px 20px;
`;

export const Logo = styled.img`
   padding-top: 10px;
   padding-left: 107px;
`;

export const PurpleBackground = styled.div`
   height: 20em;
   background-color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ButtonsWrapper = styled.div`
   display: flex;

   justify-content: space-between;
   padding-right: 30px;

   button {
      margin-right: 20px;
   }
`;

export const LogoAndContactWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ContactAndAddressWrapper = styled.div`
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
