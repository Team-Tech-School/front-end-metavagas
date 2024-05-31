import { Link } from "react-router-dom";
import styled from "styled-components";

export const PurpleBackgroundDiv = styled.div`
   margin-top: -1.25em;
   background-color: ${(props) => props.theme.colors.darkPurple};
   width: 100%;
   height: 30%;
`;

export const DivButton = styled.div`
   display: flex;
   margin-left: 8.13em;
   margin-bottom: -2.5em;
`;

export const SaveSearchComponent = styled.div`
   margin-top: -1.25em;
   margin-left: 8.13em;
   padding-bottom: 1.25em;
`;

export const DivForNumberVacancies = styled.div`
   margin-left: 1.25em;
   padding: -1em 0.1em 0.2em 0em;
`;

export const DivForInputsAndButton = styled.div`
   padding-top: 5%;
   margin: 0em 0em 0.31em -2.81em;
`;

export const ContainerBodyPageDIV = styled.div`
   margin-top: 1.88em;
   margin-left: 6.88em;
   margin-right: 2.5em;
   margin-bottom: 1.88em;
`;

export const ContainerFilterResult = styled.div`
   display: flex;
   gap: 0.31em;
`;

export const FilterDiv = styled.div`
   margin-top: 1.5em;
   margin-right: 0.44em;
   margin-bottom: 1.88em;
   padding: 1.25em;
   width: 16.88em;
   height: fit-content;
   top: 28.56em;
   left: 8.44em;
   border-radius: 1em;
   border: 0.06em solid #ecf1f4;
   box-shadow: 0em 0.94em 2.19em 0em rgba(208, 208, 208, 0.2);
`;

export const HeadDivisionDiv = styled.div`
   display: flex;
   justify-content: space-between;
   margin-right: 1.25em;
`;

export const FilterTitle = styled.div`
   font-family: "Poppins", sans-serif;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.darkPurple};
   font-size: 1.13em;
   margin-left: 0.1em;
`;

export const ClearLink = styled.a`
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-size: 0.75em;
   color: #6950a1;
   cursor: pointer;
   margin-top: 0.35em;
   margin-left: 1em;
`;

export const ResultDiv = styled.div`
   width: 100%;
   margin-top: 1.88em;
   margin-bottom: 1.88em;
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
   font-size: 0.81em;
   margin-left: 0.5em;
   font-weight: 600;
   text-decoration: none;
`;

export const ButtonAboveImages = styled.div`
   position: absolute;
   top: 1.5em;
   &:nth-child(1) {
      left: 47em;
   }
   &:nth-child(2) {
      left: 73.5em;
   }
`;

export const GraphicDiv = styled.div`
   display: flex;
   gap: 0;
   margin-bottom: 0.44em;
   margin-top: -0.73em;
`;

export const ContainerInfoJobs = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.63em;
`;

export const LabelTitle = styled.label`
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   font-size: 1em;
   line-height: 1.5em;
   color: #1a1033;
`;

export const SalaryRangeSpan = styled.span`
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-size: 0.88em;
   line-height: 1.23em;
   color: #8c8ca1;
`;
