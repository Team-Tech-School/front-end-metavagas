import styled from "styled-components";

export const ProfileContainer = styled.div`
   display: flex;
   align-items: center;
   margin: 0px 40px;
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
