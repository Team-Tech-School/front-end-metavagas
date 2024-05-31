import styled from "styled-components";

export const WhiteBackgroundForVacancies = styled.div`
   width: 42.5%;
   height: fit-content;
   margin: 1.13em;
   border-radius: 0.94em;
   background-color: #ffffff;
   padding: 1.56em;
   box-shadow: 0 0.06em 0.19em rgba(211, 211, 211, 0.4), 0 0.06em 0.75em rgba(211, 211, 211, 0.4);
   display: flex;
   align-items: start;
   justify-content: start;
   flex-direction: column;
`;

export const VacancyTitle = styled.div`
   color: #1a1033;
   font-size: 1.13em;
   font-weight: 500;
   margin: 0.06em 0em 0.63em 0em;
`;

export const InfoVacancy = styled.div`
   color: #4a4a68;
   font-size: 0.88em;
   font-weight: 400;
   margin: 0.06em 0em 0.63em 0em;
`;

export const InfoBoldSpan = styled.span`
   color: #4a4a68;
   font-weight: 700;
   font-size: 0.88em;
`;

export const StyledLink = styled.div`
   color: #5d5fef;
   font-size: 0.88em;
   font-weight: 700;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 0.31em;

   &:hover {
      cursor: pointer;
   }
`;

export const InfoDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const IconDiv = styled.div`
   margin: -0.31em 0.44em 0em 0.13em;
`;

export const IconStyledLink = styled.div`
   margin: 0.19em 0em 0em 0.31em;
`;
