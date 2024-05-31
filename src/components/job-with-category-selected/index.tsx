import { IconContext } from "react-icons";
import { BiRightArrowAlt } from "react-icons/bi";
import * as S from "./style";
import { Vacancy } from "../../@types";

interface JobAndCategoryProps {
   info: Vacancy;
   category: string;
}

export const JobAndCategorySelected: any = ({ info, category }: JobAndCategoryProps) => {
   let displayText: string;

   switch (category) {
      case "Tecnologia":
         displayText = info.technologies.map((tech: any) => tech.tecName).join(", ");
         break;
      case "Cidades":
         displayText = info.location;
         break;
      case "Cargos":
         displayText = info.vacancyRole;
         break;
      default:
         displayText = info.technologies.map((tech: any) => tech.tecName).join(", ");
   }

   return (
      <S.CardBackground>
         <S.CardContainer>
            <div>
               <S.CardTitle>Vagas</S.CardTitle>
               <S.CardInfo>{displayText}</S.CardInfo>
            </div>
            <div>
               <IconContext.Provider value={{ color: "#1a1033", size: "1.38em" }}>
                  <BiRightArrowAlt />
               </IconContext.Provider>
            </div>
         </S.CardContainer>
      </S.CardBackground>
   );
};
