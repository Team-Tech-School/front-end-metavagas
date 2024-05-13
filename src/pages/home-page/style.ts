import styled from "styled-components";

<<<<<<< HEAD
export const WhiteBackground = styled.div`
   width: 86vw;
   height: 30vh;
   margin-top: -2em;
   position: absolute;
   background-color: white;
   border-radius: 15px;
   right: 3.5em;
   box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.822);
=======
export const WhiteBackgroundToInputs = styled.div`
   width: 86vw;
   height: 30vh;
   margin-top: -6em;
   position: absolute;
   border-radius: 15px;
   right: 5em;
   background-color: #ffffff;
   box-shadow: 0 2px 14px rgba(0, 0, 0, 0.1);
`;

export const WhiteBackground = styled.div`
   width: 100%;
   height: fit-content;
   background-color: white;
   margin-top: 125px;
>>>>>>> bca0e08efc198a28792d3cfea772144c84b84807
`;

export const PurpleBackgroundDiv = styled.div`
   margin-top: -5px;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   width: 100%;
<<<<<<< HEAD
   height: 78vh;
=======
   height: 77vh;
>>>>>>> bca0e08efc198a28792d3cfea772144c84b84807
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
   margin-top: -30px;
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
