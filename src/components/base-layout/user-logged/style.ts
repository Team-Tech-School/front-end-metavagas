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
   background-color: #fff;
   border-radius: 0.31em;
   padding: 0.13em;
   top: 2.5em;
   right: -0.63em;
   z-index: 999;
   box-shadow: 0 0.13em 0.25em rgba(0, 0, 0, 0.15);
`;

export const TooltipHr = styled.hr`
   border: none;
   border-top: 0.06em solid ${({ theme }) => theme.colors.blue};
   margin: -0.06em 0;
   width: 87%;
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
   font-size: 0.81em;
   margin: 0.63em 0.94em;
`;

export const TooltipSignOutButton = styled.button`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0.5em 0 0.06em 0;
   border: none;
   width: 90%;
   background-color: ${({ theme }) => theme.colors.gray};
   color: ${({ theme }) => theme.colors.darkPurple};
   padding: 0.31em 0.63em;
   border-radius: 0.31em;

   &:hover {
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
