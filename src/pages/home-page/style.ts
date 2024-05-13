import styled from "styled-components";

export const WhiteBackground = styled.div`
   width: 86vw;
   height: 30vh;
   margin-top: -2em;
   position: absolute;
   background-color: white;
   border-radius: 15px;
   right: 3.5em;
   box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.822);
`;

export const WhiteBackgroundToInputs = styled.div`
   width: 86vw;
   height: 30vh;
   margin-top: 6%;
   position: absolute;
   border-radius: 15px;
   right: 5em;
   background-color: #ffffff;
   box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.822);
`;

export const PurpleBackgroundDiv = styled.div`
   margin-top: -20px;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   width: 100%;
   height: 75vh;
`;

export const ContentDiv = styled.div`
   padding: 120px 50px 100px 25px;
   margin-left: 100px;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
`;

export const ForMainTitleDiv = styled.div`
   margin-top: -15px;
   margin-bottom: 13px;
`;

export const ForWhiteTitleDiv = styled.div`
   margin-top: -20px;
`;

export const StyledSpan = styled.span`
   color: ${({ theme }) => theme.colors.white};
   margin-left: 10px;
`;

export const StyledImg = styled.img`
   right: 40px;
   top: 115px;
   position: absolute;
`;
