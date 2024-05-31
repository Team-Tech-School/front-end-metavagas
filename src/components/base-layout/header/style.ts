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
   padding: 1.25em;
   height: 20%;
   margin: auto;
`;

export const Logo = styled.img`
   margin: 0.63em 0em 0.63em 6.56em;
`;

export const PurpleBackground = styled.div`
   background-color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ButtonsWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-right: 5em;

   button {
      margin-right: 1.25em;
   }
`;
export const BlackLine = styled.div`
   height: 0.06em;
   width: 81.5vw;
   background-color: #080019;
   margin: 0em 1.25em 0em 7.5em;
`;
