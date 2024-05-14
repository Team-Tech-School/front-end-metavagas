import { IconContext } from "react-icons";
import { JobAndCategorySelected, RegistrationBanner } from "../index";
import * as S from "./style";
import { useState } from "react";
import { CgScreen } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { FaBriefcase } from "react-icons/fa";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
   isSelected: boolean;
   icon?: JSX.Element;
};

const jobs: any[] = ["React", "Javascript", ".Net", "PHP", "Python", "Java", "NodeJS", "Slack", "Redux", "NestJS", "PostgreSQL", "TypeORM"];

const Category = ({ onClick, isSelected, children, icon }: Props) => {
   return (
      <>
         {isSelected ? (
            <S.CategoryContainer isSelected={isSelected} onClick={onClick} style={{ borderBottom: "3px solid #fbb04d" }}>
               <div style={{ margin: "18px 8px 10px 0px" }}>
                  <IconContext.Provider value={{ color: "#fbb04d", size: "22px" }}>{icon}</IconContext.Provider>
               </div>
               {children}
            </S.CategoryContainer>
         ) : (
            <S.CategoryContainer isSelected={isSelected} onClick={onClick}>
               <div style={{ margin: "18px 8px 10px 0px" }}>
                  <IconContext.Provider value={{ color: "#f1f1f1", size: "22px" }}>{icon}</IconContext.Provider>
               </div>
               {children}
            </S.CategoryContainer>
         )}
      </>
   );
};

export const JobsSection = () => {
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

   const handleCategoryClick = (category: string) => {
      setSelectedCategory(category);
   };

   return (
      <S.PurpleBackground>
         <S.Title>Vagas de emprego em todo Brasil</S.Title>
         <RegistrationBanner />
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
            {jobs.map((job) => (
               <JobAndCategorySelected key={job} info={job} />
            ))}
         </div>
      </S.PurpleBackground>
   );
};
