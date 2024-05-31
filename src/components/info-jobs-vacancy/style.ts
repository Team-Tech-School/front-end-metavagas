import styled, { css } from "styled-components";

export const blurredStyle = css`
   filter: blur(0.31em);
`;

interface ResultInfoJobsDivProps {
   newVacancy?: boolean;
}

export const ResultInfoJobsDiv = styled.div<ResultInfoJobsDivProps>`
   width: 90%;
   padding: 0.25em 0.19em 0.94em 0.19em;
   border-radius: 1em;
   border: 0.06em solid #ecf1f4;
   background-color: #ffffff;
   box-shadow: 0 0.94em 2.19em rgba(208, 208, 208, 0.2);
   margin: 0.31em 0.94em;
   ${({ newVacancy }) =>
      newVacancy &&
      css`
         border: 0.06em solid #6950a1;
         box-shadow: 0 0.94em 2.19em rgba(208, 208, 208, 0.2), 0 0 0 0.13em #6950a1;
      `}
`;

export const Container = styled.div`
   display: flex;
   justify-content: flex-start;
   margin-top: 0.63em;
   margin-right: 1.5em;
   gap: 1.88em;
`;

export const ContainerForTitle = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 0.63em;
   margin-right: 1.5em;
`;

export const ContainerTitle = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.88em;
   margin-top: -1.44em;
`;

export const H1InfoJobs = styled.h1`
   margin-left: 1em;
   font-weight: 600;
   font-size: 1.19em;
   line-height: 1.54em;
   color: #1a1033;
`;

export const SpanInfoJobs = styled.span<{ page?: boolean; blurred?: boolean }>`
   margin-left: 1.5em;
   font-weight: 500;
   font-size: 0.88em;
   line-height: 1.54em;
   color: #4a4a68;
   ${(props) => props.page && props.blurred && blurredStyle}
`;

export const CardResultInfoJobs = styled.div`
   margin: 0.81em 0em 0.5em 1.25em;
`;

export const InfoJobsDiv = styled.div`
   font-family: Poppins;
   font-weight: 700;
   font-size: 0.88em;
   line-height: 1.23em;
   text-align: right;
   color: #4a4a68;
`;

export const InfoJobsSpan = styled.span`
   font-family: Poppins;
   font-weight: 400;
   font-size: 0.75em;
   line-height: 1.23em;
   color: #4a4a68;
`;

export const ContainerFooter = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.56em;
   margin-left: 1.5em;
`;

export const Paragraph = styled.p<{ blurred?: boolean }>`
   font-family: Poppins, sans-serif;
   font-weight: 400;
   font-size: 0.88em;
   line-height: 1.58em;
   margin-top: -0.81em;
   margin-left: 0.19em;
   color: #4a4a68;
   ${(props) => props.blurred && blurredStyle}
`;

export const StyledText = styled.span<{ page?: boolean; blurred?: boolean }>`
   font-family: Poppins, sans-serif;
   font-weight: 400;
   font-size: 0.88em;
   line-height: 1.58em;
   color: #4a4a68;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.31em;
   ${(props) => props.page && props.blurred && blurredStyle}
`;

export const InfoJobsText = styled.span<{ page?: boolean; blurred?: boolean }>`
   font-family: Poppins, sans-serif;
   font-weight: 400;
   font-size: 0.88em;
   line-height: 1.58em;
   color: #4a4a68;
   ${(props) => props.page && props.blurred && blurredStyle}
`;

export const BoldText = styled.span`
   font-weight: 700;
   color: ${({ theme }) => theme.colors.purple};
`;

export const StyledLink = styled.div`
   color: #5d5fef;
   font-size: 0.88em;
   font-weight: 700;
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   margin-top: -0.94em;
   margin-left: 0.06em;

   &:hover {
      cursor: pointer;
   }
`;

export const IconStyledLink = styled.div`
   margin: 0.19em 0em 0em 0.31em;
`;
