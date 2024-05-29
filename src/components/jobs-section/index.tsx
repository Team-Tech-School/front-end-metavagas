import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { CgScreen } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { FaBriefcase } from "react-icons/fa";
import { JobAndCategorySelected, RegistrationBanner } from "../index";
import * as S from "./style";
import { useVacanciesContext } from "../../providers/vacancies-provider";
import { useAuthContext } from "../../providers/auth-provider";

interface JobSectionProps {
   children: React.ReactNode;
   onClick: () => void;
   isSelected: boolean;
   icon?: JSX.Element;
}

const Category = ({ onClick, isSelected, children, icon }: JobSectionProps) => {
   return (
      <>
         {isSelected ? (
            <S.CategoryContainer isSelected={isSelected} onClick={onClick} style={{ borderBottom: "2px solid #e18309" }}>
               <div style={{ margin: "18px 10px 10px -1px" }}>
                  <IconContext.Provider value={{ color: "#fbb04d", size: "22px" }}>{icon}</IconContext.Provider>
               </div>
               {children}
            </S.CategoryContainer>
         ) : (
            <S.CategoryContainer isSelected={isSelected} onClick={onClick}>
               <div style={{ margin: "18px 10px 10px -1px" }}>
                  <IconContext.Provider value={{ color: "#f1f1f1", size: "22px" }}>{icon}</IconContext.Provider>
               </div>
               {children}
            </S.CategoryContainer>
         )}
      </>
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
   }, [selectedCategory]);

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
         <div style={{ display: "flex", flexWrap: "wrap", width: "fit-content", justifyContent: "center", alignItems: "center" }}>
            {vacancies.map((item: any) => (
               <JobAndCategorySelected key={item.id} info={item} category={selectedCategory} />
            ))}
         </div>
      </S.PurpleBackground>
   );
};
