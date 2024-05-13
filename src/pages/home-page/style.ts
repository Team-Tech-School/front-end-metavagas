import styled from "styled-components";

export const WhiteBackgroundToInputs = styled.div`
   width: fit-content;
   height: fit-content;
   padding: -5px 15px 0px 15px;
   top: 73%;
   margin: 0% 8%;
   position: absolute;
   border-radius: 15px;
   background-color: #fff;
   box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
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
   right: 55px;
   top: 105px;
   position: absolute;
`;
