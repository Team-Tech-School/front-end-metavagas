import styled from "styled-components";

export const WhiteBackgroundForVacancies = styled.div`
   width: 42.5%;
   height: fit-content;
   margin: 18px;
   border-radius: 15px;
   background-color: #ffffff;
   padding: 25px;
   box-shadow: 0 1px 3px rgba(211, 211, 211, 0.4), 0 1px 12px rgba(211, 211, 211, 0.4);
   display: flex;
   align-items: start;
   justify-content: start;
   flex-direction: column;
`;

export const VacancyTitle = styled.div`
   color: #1a1033;
   font-size: 18px;
   font-weight: 500;
   margin: 1px 0px 10px 0px;
`;

export const InfoVacancy = styled.div`
   color: #4a4a68;
   font-size: 14px;
   font-weight: 400;
   margin: 1px 0px 10px 0px;
`;

export const InfoBoldSpan = styled.span`
   color: #4a4a68;
   font-weight: 700;
   font-size: 14px;
`;

export const StyledLink = styled.div`
   color: #5d5fef;
   font-size: 14px;
   font-weight: 700;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 5px;

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
   margin: -5px 7px 0px 2px;
`;

export const IconStyledLink = styled.div`
   margin: 3px 0px 0px 5px;
`;
