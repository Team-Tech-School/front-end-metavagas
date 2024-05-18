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
   border-top: 0.5px solid ${({ theme }) => theme.colors.lightPurple};
   height: 22em;
   background-color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ButtonsDiv = styled.div`
   display: flex;
   justify-content: space-between;
   margin-right: 80px;

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
   justify-content: space-between;
   margin-left: 85px;
`;

export const Title = styled.div`
   color: ${({ theme }) => theme.colors.orange};
   font-size: 18px;
`;

export const Information = styled.div`
   color: ${({ theme }) => theme.colors.white};
   font-weight: ${({ theme }) => theme.fontWeight.middle};
   font-size: 16.5px;
`;

export const TitleContainer = styled.div<{ marginTop?: string; marginBottom?: string; marginLeft?: string }>`
   margin-top: ${(props) => props.marginTop || "0"};
   margin-bottom: ${(props) => props.marginBottom || "0"};
   margin-left: ${(props) => props.marginLeft || "0"};
`;
