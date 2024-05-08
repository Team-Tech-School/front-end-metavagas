import styled from "styled-components";

export const PurpleBackgroundDiv = styled.div`
   margin-top: -5px;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   width: 100%;
   height: 78vh;
`;

export const WhiteBackgroundDiv = styled.div`
   margin-top: -5px;
   background-color: ${({ theme }) => theme.colors.white};
   width: 100%;
   height: 65vh;
`;

export const ContentDiv = styled.div`
   padding: 120px 50px 100px 25px;
   margin-left: 100px;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
`;
