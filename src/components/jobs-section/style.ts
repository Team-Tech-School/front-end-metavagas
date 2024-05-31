import styled from "styled-components";
import { motion } from "framer-motion";

export const PurpleBackground = styled.div`
   background-color: ${({ theme }) => theme.colors.darkPurple};
   height: fit-content;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-start;
   padding: 6.25em 6.25em 3.13em 6.25em;
`;

export const DivForIcon = styled.div`
   margin: 1.13em 0.63em 0.63em -0.06em;
`;

export const Title = styled.div`
   color: ${({ theme }) => theme.colors.orange};
   font-weight: 600;
   font-size: 1.88em;
   margin: -1.88em 2.5em 1.56em 1.56em;
`;

export const CategoryContainer = styled.div<{ isSelected: boolean }>`
   display: flex;
   justify-content: space-around;
   align-items: center;
   color: ${({ theme, isSelected }) => (isSelected ? theme.colors.orange : theme.colors.white)};
   cursor: pointer;
   font-size: 1.06em;
   font-weight: 400;
   padding: 0.31em 4.38em;
   border-bottom: ${({ isSelected }) => (isSelected ? "0.13em solid #e18309" : "none")};

   &:hover {
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme, isSelected }) => (isSelected ? theme.colors.orange : theme.colors.white)};
   }
`;

export const CategoriesWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 0.06em solid ${({ theme }) => theme.colors.white};
   width: fit-content;
   margin: 0.63em 0em 1.25em 1.38em;
`;

export const VacanciesContainer = styled(motion.div)`
   display: flex;
   flex-wrap: wrap;
   max-width: 80vw;
   justify-content: center;
   align-items: center;
`;
