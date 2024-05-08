import styled from "styled-components";

export const PurpleBackgroundDiv = styled.div`
   margin-top: -5px;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   width: 100%;
   height: 90vh;
`;

export const ContentDiv = styled.div`
   padding: 150px 50px 100px 25px;
   margin-left: 100px;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
`;
