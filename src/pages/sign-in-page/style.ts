import styled from "styled-components";

export const PurpleBackgroundDiv = styled.div`
   margin-top: -1%;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   width: 100%;
   height: 67vh;
`;

export const ContentDiv = styled.div`
   padding: 7% 5% 10% 2.5%;
   margin-left: 7%;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
`;

export const TitleContainer = styled.div<{ marginTop?: string; marginBottom?: string }>`
   margin-top: ${(props) => props.marginTop || "0"};
   margin-bottom: ${(props) => props.marginBottom || "0"};
`;
