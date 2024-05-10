import { FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { GrLocation } from "react-icons/gr";
import { CgScreen } from "react-icons/cg";
import * as S from "./style";

type Props = {
   title: string;
   local: string;
   tecnology: string;
};

export const VacancyHomePageCard = ({ title, local, tecnology }: Props) => {
   return (
      <S.WhiteBackgroundForVacancies>
         <S.VacancyTitle>{title}</S.VacancyTitle>
         <S.InfoDiv>
            <div style={{ margin: "-1px 7px 0px 2px" }}>
               <IconContext.Provider value={{ color: "#fbb04d", size: "17px" }}>{<GrLocation />}</IconContext.Provider>
            </div>
            <S.InfoVacancy>Localização: {local}</S.InfoVacancy>
         </S.InfoDiv>
         <S.InfoDiv>
            <div style={{ margin: "-1px 7px 0px 2px" }}>
               <IconContext.Provider value={{ color: "#fbb04d", size: "17px" }}>{<CgScreen />}</IconContext.Provider>
            </div>
            <S.InfoVacancy>
               Tecnologia: <S.InfoBoldSpan>{tecnology}</S.InfoBoldSpan>
            </S.InfoVacancy>
         </S.InfoDiv>
         <S.StyledLink>
            Ver mais detalhes
            <div style={{ margin: "6px 0px 0px 3px" }}>
               <IconContext.Provider value={{ color: "#5d5fef", size: "17px" }}>{<FaAngleRight />}</IconContext.Provider>
            </div>
         </S.StyledLink>
      </S.WhiteBackgroundForVacancies>
   );
};
