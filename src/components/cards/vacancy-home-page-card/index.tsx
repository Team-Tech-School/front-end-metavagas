//import assets
import { FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrLocation } from "react-icons/gr";
import { CgScreen } from "react-icons/cg";
//import style
import * as S from "./style";

// tipagem
interface CardProps {
   title: string;
   local: string;
   tecnology: string;
}

export const VacancyHomePageCard = ({ title, local, tecnology }: CardProps) => {
   return (
      <S.WhiteBackgroundForVacancies>
         <S.VacancyTitle>{title}</S.VacancyTitle>
         <S.InfoDiv>
            <S.IconDiv>
               <IconContext.Provider value={{ color: "#fbb04d", size: "15px" }}>{<GrLocation />}</IconContext.Provider>
            </S.IconDiv>
            <S.InfoVacancy>Localização: {local}</S.InfoVacancy>
         </S.InfoDiv>
         <S.InfoDiv>
            <S.IconDiv>
               <IconContext.Provider value={{ color: "#fbb04d", size: "15px" }}>{<CgScreen />}</IconContext.Provider>
            </S.IconDiv>
            <S.InfoVacancy>
               Tecnologia: <S.InfoBoldSpan>{tecnology}</S.InfoBoldSpan>
            </S.InfoVacancy>
         </S.InfoDiv>
         <S.StyledLink>
            Ver mais detalhes
            <S.IconStyledLink>
               <IconContext.Provider value={{ color: "#5d5fef", size: "13px" }}>{<FaAngleRight />}</IconContext.Provider>
            </S.IconStyledLink>
         </S.StyledLink>
      </S.WhiteBackgroundForVacancies>
   );
};
