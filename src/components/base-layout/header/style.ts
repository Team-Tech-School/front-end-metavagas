import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: inherit;
   display: flex;
   align-items: center;
`;

export const ContentWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   height: 20%;
   margin: auto;
`;

export const Logo = styled.img`
   margin: 10px 0px 10px 105px;
`;

export const PurpleBackground = styled.div`
   background-color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ButtonsWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-right: 80px;

   button {
      margin-right: 20px;
   }
`;
export const BlackLine = styled.div`
   height: 1px;
   width: 82.6%;
   background-color: #080019;
   margin: 0px 20px 0px 120px;
`;
