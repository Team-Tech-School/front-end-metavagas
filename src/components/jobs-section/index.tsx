import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { CgScreen } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { FaBriefcase } from "react-icons/fa";
import { JobAndCategorySelected, RegistrationBanner } from "../index";
import * as S from "./style";
import { useVacanciesContext, useAuthContext } from "../../providers";
import { AnimatePresence } from "framer-motion";

interface JobSectionProps {
   children: React.ReactNode;
   onClick: () => void;
   isSelected: boolean;
   icon?: JSX.Element;
}

const Category = ({ onClick, isSelected, children, icon }: JobSectionProps) => {
   return (
      <S.CategoryContainer isSelected={isSelected} onClick={onClick}>
         <S.DivForIcon>
            <IconContext.Provider value={{ color: isSelected ? "#fbb04d" : "#f1f1f1", size: "1.38em" }}>{icon}</IconContext.Provider>
         </S.DivForIcon>
         {children}
      </S.CategoryContainer>
   );
};

export const JobsSection = () => {
   const { vacancies, fetchVacanciesForSelectedCategory } = useVacanciesContext();
   const { isLoggedIn } = useAuthContext();
   const [selectedCategory, setSelectedCategory] = useState<string>("Tecnologia");

   useEffect(() => {
      let categoryType: string;

      switch (selectedCategory) {
         case "Tecnologia":
            categoryType = "tecName";
            break;
         case "Cidades":
            categoryType = "location";
            break;
         case "Cargos":
            categoryType = "vacancyRole";
            break;
         default:
            categoryType = "tecName";
      }
      fetchVacanciesForSelectedCategory(categoryType);
   }, [selectedCategory, fetchVacanciesForSelectedCategory]);

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   return (
      <S.PurpleBackground>
         <S.Title>Vagas de emprego em todo Brasil</S.Title>
         {!isLoggedIn && <RegistrationBanner link="/fazer-cadastro" />}
         <S.CategoriesWrapper>
            <Category icon={<CgScreen />} onClick={() => handleCategoryClick("Tecnologia")} isSelected={selectedCategory === "Tecnologia"}>
               Tecnologia
            </Category>
            <Category icon={<GrLocation />} onClick={() => handleCategoryClick("Cidades")} isSelected={selectedCategory === "Cidades"}>
               Cidades
            </Category>
            <Category icon={<FaBriefcase />} onClick={() => handleCategoryClick("Cargos")} isSelected={selectedCategory === "Cargos"}>
               Cargos
            </Category>
         </S.CategoriesWrapper>
         <AnimatePresence mode="wait">
            <S.VacanciesContainer key={selectedCategory} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.4 }}>
               {vacancies.map((item: any) => (
                  <JobAndCategorySelected key={item.id} info={item} category={selectedCategory} />
               ))}
            </S.VacanciesContainer>
         </AnimatePresence>
      </S.PurpleBackground>
   );
};
