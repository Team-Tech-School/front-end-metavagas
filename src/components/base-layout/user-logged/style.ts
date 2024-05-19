import styled from "styled-components";

export const ProfileContainer = styled.div`
   display: flex;
   align-items: center;
   margin-right: 8%;
`;

export const ProfilePicture = styled.div`
   width: 45px;
   height: 45px;
   background-color: ${({ theme }) => theme.colors.orange};
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 13px;
`;

export const Initials = styled.div`
   color: ${({ theme }) => theme.colors.lightPurple};
   font-size: 19px;
   font-weight: 500;
`;

export const Username = styled.div`
   color: ${({ theme }) => theme.colors.white};
   font-size: 16px;
   margin-bottom: -1px;
   margin-right: 5px;
   cursor: pointer;
`;

export const Tooltip = styled.div`
   position: absolute;
   background-color: #fff;
   border-radius: 5px;
   padding: 2px;
   top: 40px;
   right: -10px;
   z-index: 999;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
`;

export const TooltipHr = styled.hr`
   border: none;
   border-top: 1px solid ${({ theme }) => theme.colors.blue};
   margin: -1px 0;
   width: 87%;
`;

export const TooltipContentDiv = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-bottom: 5px;
`;

export const TooltipEmail = styled.div`
   color: ${({ theme }) => theme.colors.lightPurple};
   font-size: 13px;
   margin: 10px 15px;
`;

export const TooltipSignOutButton = styled.button`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 8px 0 1px 0;
   border: none;
   width: 90%;
   background-color: ${({ theme }) => theme.colors.gray};
   color: ${({ theme }) => theme.colors.darkPurple};
   padding: 5px 10px;
   border-radius: 5px;

   &:hover {
      color: ${({ theme }) => theme.colors.orange};
   }
`;

export const IconInButton = styled.div`
   margin: 5px 0 0 2px;
`;

export const DivForTooltip = styled.div`
   margin-left: 1px;
   margin-top: 5px;
   position: relative;
`;
