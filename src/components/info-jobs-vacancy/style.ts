import styled, { css } from "styled-components"

export const blurredStyle = css`
  filter: blur(5px);
`;

export const ResultInfoJobsDiv = styled.div`    
width: 100%;
height: 300px;
border-radius: 16px;
border: 1px solid #ECF1F4; /* cinza 4 */
background-color: #FFFFFF; /* Branco */
box-shadow: 0 15px 35px rgba(208, 208, 208, 0.2); /* sombra 1 */
`
export const Container = styled.div`
 display: flex;
 justify-content: space-between;
 margin-top: 10px; /* Espaçamento superior */
 margin-right: 24px; /* Espaçamento à esquerda */
`
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: -23px;
`
export const H1InfoJobs = styled.h1`
  margin-left: 24px; /* Espaçamento à esquerda */
  font-weight: 500; /* Weight médio */
  font-size: 20px;
  line-height: 24.57px;
  color: #1A1033; /* Preto */
`
export const SpanInfoJobs = styled.span <{ page?: boolean }>`
  margin-left: 24px; 
  font-weight: 500;
  font-size: 14px;
  line-height: 24.57px;
  color: #4A4A68;
  ${(props) => props.page && blurredStyle}

`
export const CardResultInfoJobs = styled.div`
  margin-left: 20px;
  margin-top: 24px;
`
export const InfoJobsDiv = styled.div`
font-family: Poppins;
font-weight: 700;
font-size: 14px;
line-height: 19.6px;
text-align: right;
color: #4A4A68;
`
export const InfoJobsSpan = styled.span`
font-family: Poppins;
font-weight: 400;
font-size: 14px;
line-height: 19.6px;
color: #4A4A68;
`
export const ContainerFooter = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
margin-left: 24px;
`
export const Paragraph = styled.p`
font-family: Poppins, sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 25.2px;
color: #4A4A68;
`
export const StyledText = styled.span <{ page?: boolean }>`
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 25.2px;
  color: #4A4A68;
  ${(props) => props.page && blurredStyle}
`;

export const BoldText = styled.span`
  font-weight: 700;
`;