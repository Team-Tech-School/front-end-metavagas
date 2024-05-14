import styled from "styled-components";

export const PurpleBackground = styled.div`
   background-color: ${({ theme }) => theme.colors.darkPurple};
   height: fit-content;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-start;
   padding: 7%;
`;

export const Title = styled.div`
   color: ${({ theme }) => theme.colors.orange};
   font-weight: 600;
   font-size: 30px;
   margin: -30px 40px 25px 25px;
`;

export const CategoryContainer = styled.div<{ isSelected: boolean }>`
   display: flex;
   justify-content: space-around;
   align-items: center;
   color: ${({ theme, isSelected }) => (isSelected ? theme.colors.orange : theme.colors.white)};
   cursor: pointer;
   font-size: 17px;
   font-weight: 400;
   padding: 5px 75px;

   &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme, isSelected }) => (isSelected ? theme.colors.orange : theme.colors.white)};
   }
`;

export const CategoriesWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid ${({ theme }) => theme.colors.white};
   width: fit-content;
   margin-top: 10px;
   margin-left: 30px;
   margin-bottom: 20px;
`;
