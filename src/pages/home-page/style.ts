import styled from "styled-components";

export const WhiteBackgroundToInputs = styled.div`
   width: 81vw;
   height: fit-content;
   top: 70vh;
   margin: 0 11.25em 0 7.5em;
   position: absolute;
   border-radius: 0.94em;
   background-color: #fff;
   box-shadow: 0 0.06em 0.19em rgba(211, 211, 211, 0.4), 0 0.06em 0.75em rgba(211, 211, 211, 0.4);
`;

export const PurpleBackgroundDiv = styled.div`
   margin-top: 2%;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   width: 100vw;
   height: 78vh;
`;

export const ContentDiv = styled.div`
   padding: 12% 4% 8% 1%;
   margin-left: 8.5%;
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: start;
`;

export const ForMainTitleDiv = styled.div`
   margin-top: -0.06em;
   margin-bottom: 10.4%;
`;

export const ForWhiteTitleDiv = styled.div`
   margin-top: -5%;
`;

export const StyledSpan = styled.span`
   color: ${({ theme }) => theme.colors.white};
   margin-left: 0.2em;
`;

export const StyledImg = styled.img`
   right: 8.8%;
   top: 16%;
   width: 50%;
   position: absolute;
`;

export const RecentJobsTitleDiv = styled.div`
   margin: 11.5% 6.5% 2% 9.5%;
`;

export const VacancyCardsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   margin: 0.6% 2.2% 1% 3%;
`;

export const OrangeButtonContainer = styled.div`
   margin: 2% 0;
`;

export const StyledHr = styled.hr`
   border-color: orange;
   border-style: solid;
   border-width: 0.06em 0 0;
   width: 81.5vw;
   margin: 0% 8.6%;
   position: absolute;
`;
