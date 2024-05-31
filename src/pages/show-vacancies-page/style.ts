import { Link } from "react-router-dom";
import styled from "styled-components";

export const PurpleBackgroundDiv = styled.div`
   margin-top: -20px;
   background-color: ${(props) => props.theme.colors.darkPurple};
   width: 100%;
   height: 30%;
`;

export const DivButton = styled.div`
   display: flex;
   margin-left: 130px;
   margin-bottom: -40px;
`;

export const SaveSearchComponent = styled.div`
   margin-top: -20px;
   margin-left: 130px;
   padding-bottom: 20px;
`;

export const DivForNumberVacancies = styled.div`
   margin-left: 20px;
   padding-top: 30px;
`;

export const DivForInputsAndButton = styled.div`
   padding-top: 5%;
   margin: 0px 0px 5px -45px;
`;

export const ContainerBodyPageDIV = styled.div`
   margin-top: 30px;
   margin-left: 110px;
   margin-right: 40px;
   margin-bottom: 30px;
`;

export const ContainerFilterResult = styled.div`
   display: flex;
   gap: 5px;
`;

export const FilterDiv = styled.div`
   margin-top: 30px;
   margin-right: 7px;
   margin-bottom: 30px;
   padding: 20px;
   width: 270px;
   height: fit-content;
   top: 457px;
   left: 135px;
   border-radius: 16px;
   border: 1px solid #ecf1f4;
   box-shadow: 0px 15px 35px 0px rgba(208, 208, 208, 0.2);
`;

export const HeadDivisionDiv = styled.div`
   display: flex;
   justify-content: space-between;
   margin-right: 20px;
`;

export const FilterTitle = styled.div`
   font-family: "Poppins", sans-serif;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.darkPurple};
   font-size: 18px;
   line-height: 24.57px;
`;

export const ClearLink = styled.a`
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-size: 12px;
   line-height: 16.8px;
   color: #6950a1;
   cursor: pointer;
   margin-top: 4px;
`;

export const ResultDiv = styled.div`
   width: 100%;
   margin-top: 30px;
   margin-bottom: 30px;
`;

export const ButtonContainer = styled.div`
   position: absolute;
   top: 81%;
   width: 100%;
   display: flex;
   justify-content: space-between;
   transform: translateX(-50%);
   z-index: 1;
`;

export const StyledLink = styled(Link)`
   color: ${({ theme }) => theme.colors.blue};
   font-size: 13px;
   margin-left: 8px;
   font-weight: 600;
   text-decoration: none;
`;

export const ButtonAboveImages = styled.div`
   position: absolute;
   &:nth-child(1) {
      left: 55.5%;
   }
   &:nth-child(2) {
      left: 87%;
   }
`;

export const GraphicDiv = styled.div`
   display: flex;
   gap: 0;
   margin-bottom: 7px;
   margin-top: -5px;
`;

export const ContainerInfoJobs = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const LabelTitle = styled.label`
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #1a1033;
`;

export const SalaryRangeSpan = styled.span`
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 19.6px;
   color: #8c8ca1;
`;
