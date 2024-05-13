import styled from "styled-components";

export const ProfileContainer = styled.div`
   display: flex;
   align-items: center;
   margin: 0px 40px;
   cursor: pointer;
`;

export const ProfilePicture = styled.div`
   width: 45px;
   height: 45px;
   background-color: ${({ theme }) => theme.colors.orange};
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-right: 10px;
`;

export const Initials = styled.div`
   color: ${({ theme }) => theme.colors.lightPurple};
   font-size: 19px;
   font-weight: 500;
`;

export const Username = styled.div`
   color: #f1f1f1;
   font-size: 17px;
   letter-spacing: 0.1px;
   margin-left: 3px;
`;

export const Tooltip = styled.div`
   position: absolute;
   background-color: #fff;
   border-radius: 5px;
   padding: 5px 10px;
   top: 30px;
   right: -10px;
   z-index: 999;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);

   &:hover {
      background-color: #f1f1f1;
   }

   & > div {
      cursor: pointer;
      display: flex;
      align-items: center;
   }
`;
