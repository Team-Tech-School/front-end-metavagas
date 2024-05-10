import styled from "styled-components";

export const WhiteBackgroundForVacancies = styled.div`
   width: 44%;
   height: fit-content;
   margin: 18px;
   border-radius: 15px;
   background-color: #ffffff;
   padding: 30px;
   box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
   border: 0.1px solid #f5efd8fc;
   display: flex;
   align-items: start;
   justify-content: start;
   flex-direction: column;
`;

export const VacancyTitle = styled.div`
   color: #1a1033;
   font-size: 20px;
   font-weight: 500;
   margin: 1px 0px 10px 0px;
`;

export const InfoVacancy = styled.div`
   color: #4a4a68;
   font-size: 15px;
   font-weight: 500;
   margin: 1px 0px 10px 0px;
`;

export const InfoBoldSpan = styled.span`
   color: #4a4a68;
   font-weight: 700;
   font-size: 15px;
`;

export const StyledLink = styled.div`
   color: #5d5fef;
   font-size: 15px;
   font-weight: 700;
   display: flex;
   align-items: center;
   justify-content: center;

   &:hover {
      cursor: pointer;
   }
`;

export const InfoDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;
