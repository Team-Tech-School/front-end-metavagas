import styled from "styled-components";

export const Container = styled.div`
   background-color: white;
   padding: 2.19em 0.69em 0.75em 0.69em;
   border-radius: 0.5em;
   position: absolute;
   right: 7.5em;
   margin-top: -5vh;
   height: fit-content;
`;

export const TextContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   padding: 0.31em;
`;

export const Underline = styled.div`
   text-decoration: underline;
   color: ${({ theme }) => theme.colors.lightPurple};
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   margin: 0em 0.31em;
   cursor: pointer;
`;

export const InnerContainer = styled.div`
   margin-top: -4.06em;
   margin-left: 0.31em;
   position: absolute;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const CircleImage = styled.img`
   width: 3.88em;
`;

export const IconWrapper = styled.div`
   position: absolute;
   margin-left: 0.38em;
   margin-top: 0.38em;
`;

export const InfoDiv = styled.div`
   margin-bottom: 0.25em;
`;
