//import assets
import { IconContext } from "react-icons";
import { BiRightArrowAlt } from "react-icons/bi";
//import style
import * as S from "./style";

//tipagem
interface JobAndCategoryProps {
   info: string;
}

export const JobAndCategorySelected = ({ info }: JobAndCategoryProps) => {
   return (
      <>
         <S.CardBackground>
            <S.CardContainer>
               <div>
                  <S.CardTitle>Vagas</S.CardTitle>
                  <S.CardInfo>{info}</S.CardInfo>
               </div>
               <div>
                  <IconContext.Provider value={{ color: "#1a1033", size: "22px" }}>{<BiRightArrowAlt />}</IconContext.Provider>
               </div>
            </S.CardContainer>
         </S.CardBackground>
      </>
   );
};
