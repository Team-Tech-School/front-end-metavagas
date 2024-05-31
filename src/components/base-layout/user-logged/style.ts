import styled from "styled-components";

export const ProfileContainer = styled.div`
   display: flex;
   align-items: center;
   margin-right: 8%;
`;

export const ProfilePicture = styled.div`
   width: 2.81em;
   height: 2.81em;
   background-color: ${({ theme }) => theme.colors.orange};
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 0.81em;
`;

export const Initials = styled.div`
   color: ${({ theme }) => theme.colors.lightPurple};
   font-size: 1.19em;
   font-weight: 500;
`;

export const Username = styled.div`
   color: ${({ theme }) => theme.colors.white};
   font-size: 1em;
   margin-bottom: -0.06em;
   margin-right: 0.31em;
   cursor: pointer;
`;

export const Tooltip = styled.div`
    position: absolute;
    background-color: rgb(255, 255, 255);
    border-radius: 0.31em;
    padding: 0.5em;
    top: 2.2em;
    width: 11.5em;
    right: -0.63em;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0.13em 0.25em;
`;

export const TooltipHr = styled.hr`
   border: none;
   border-top: 0.06em solid ${({ theme }) => theme.colors.blue};
   margin: -0.06em 0;
   width: 96%;
`;

export const TooltipContentDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-bottom: 0.31em;
`;

export const TooltipEmail = styled.div`
   color: ${({ theme }) => theme.colors.lightPurple};
   font-size: 0.8em;
   margin: 0.63em 0.94em;
`;

export const TooltipSignOutButton = styled.button`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0.6em 0 -0.4em 0;
   border: none;
   width: 96%;
   background-color: ${({ theme }) => theme.colors.gray};
   color: ${({ theme }) => theme.colors.darkPurple};
   padding: 0.31em 0.63em;
   border-radius: 0.31em;

   &:hover {
      background-color: ${({ theme }) => theme.colors.midGray};
      color: ${({ theme }) => theme.colors.orange};
   }
`;

export const IconInButton = styled.div`
   margin: 0.31em 0 0 0.13em;
`;

export const DivForTooltip = styled.div`
   margin-left: 0.06em;
   margin-top: 0.31em;
   position: relative;
`;
