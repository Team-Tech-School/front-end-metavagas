import { FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrLocation } from "react-icons/gr";
import { CgScreen } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface CardProps {
   title: string;
   local: string;
   tecnology: any;
}

export const VacancyHomePageCard = ({ title, local, tecnology }: CardProps) => {
   const navigate = useNavigate();

   const handleClick = () => {
      navigate("/fazer-cadastro");
   };

   return (
      <S.WhiteBackgroundForVacancies>
         <S.VacancyTitle>{title}</S.VacancyTitle>
         <S.InfoDiv>
            <S.IconDiv>
               <IconContext.Provider value={{ color: "#fbb04d", size: "0.94em" }}>{<GrLocation />}</IconContext.Provider>
            </S.IconDiv>
            <S.InfoVacancy>Localização: {local}</S.InfoVacancy>
         </S.InfoDiv>
         <S.InfoDiv>
            <S.IconDiv>
               <IconContext.Provider value={{ color: "#fbb04d", size: "0.94em" }}>{<CgScreen />}</IconContext.Provider>
            </S.IconDiv>
            <S.InfoVacancy>
               Tecnologia: <S.InfoBoldSpan>{tecnology}</S.InfoBoldSpan>
            </S.InfoVacancy>
         </S.InfoDiv>
         <S.StyledLink onClick={handleClick}>
            Ver mais detalhes
            <S.IconStyledLink>
               <IconContext.Provider value={{ color: "#5d5fef", size: "0.81em" }}>{<FaAngleRight />}</IconContext.Provider>
            </S.IconStyledLink>
         </S.StyledLink>
      </S.WhiteBackgroundForVacancies>
   );
};
