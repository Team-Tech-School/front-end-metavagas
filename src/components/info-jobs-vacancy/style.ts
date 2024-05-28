import styled, { css } from "styled-components";

export const blurredStyle = css`
   filter: blur(5px);
`;

interface ResultInfoJobsDivProps {
   newVacancy?: boolean;
}

export const ResultInfoJobsDiv = styled.div<ResultInfoJobsDivProps>`
   width: 100%;
   height: 350px;
   border-radius: 16px;
   border: 1px solid #ecf1f4;
   background-color: #ffffff;
   box-shadow: 0 15px 35px rgba(208, 208, 208, 0.2);
   ${({ newVacancy }) =>
      newVacancy &&
      css`
         border: 2px solid #6950a1;
         box-shadow: 0 15px 35px rgba(208, 208, 208, 0.2), 0 0 0 2px #6950a1;
      `}
`;

export const Container = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   margin-right: 24px;
`;

export const ContainerTitle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   margin-top: -23px;
`;

export const H1InfoJobs = styled.h1`
   margin-left: 24px;
   font-weight: 500;
   font-size: 20px;
   line-height: 24.57px;
   color: #1a1033;
`;

export const SpanInfoJobs = styled.span<{ page?: boolean; blurred?: boolean }>`
   margin-left: 24px;
   font-weight: 500;
   font-size: 14px;
   line-height: 24.57px;
   color: #4a4a68;
   ${(props) => props.page && props.blurred && blurredStyle}
`;

export const CardResultInfoJobs = styled.div`
   margin-left: 20px;
   margin-top: 24px;
`;

export const InfoJobsDiv = styled.div`
   font-family: Poppins;
   font-weight: 700;
   font-size: 14px;
   line-height: 19.6px;
   text-align: right;
   color: #4a4a68;
`;

export const InfoJobsSpan = styled.span`
   font-family: Poppins;
   font-weight: 400;
   font-size: 14px;
   line-height: 19.6px;
   color: #4a4a68;
`;

export const ContainerFooter = styled.div`
   display: flex;
   flex-direction: column;
   gap: 25px;
   margin-left: 24px;
`;

export const Paragraph = styled.p<{ blurred?: boolean }>`
   font-family: Poppins, sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 25.2px;
   color: #4a4a68;
   ${(props) => props.blurred && blurredStyle}
`;

export const StyledText = styled.span<{ page?: boolean; blurred?: boolean }>`
   font-family: Poppins, sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 25.2px;
   color: #4a4a68;
   ${(props) => props.page && props.blurred && blurredStyle}
`;

export const BoldText = styled.span`
   font-weight: 700;
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

export const IconStyledLink = styled.div`
   margin: 3px 0px 0px 5px;
`;
