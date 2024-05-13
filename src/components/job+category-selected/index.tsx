import { IconContext } from "react-icons";
import { BiRightArrowAlt } from "react-icons/bi";
import * as S from "./style";

type Props = {
   info: string;
};

export const JobAndCategorySelected = ({ info }: Props) => {
   return (
      <>
         <S.CardBackground>
            <S.CardContainer>
               <div>
                  <S.CardTitle>Vagas</S.CardTitle>
                  <S.CardInfo>{info}</S.CardInfo>
               </div>
               <div>
                  <IconContext.Provider value={{ color: "#1a1033", size: "28px" }}>{<BiRightArrowAlt />}</IconContext.Provider>
               </div>
            </S.CardContainer>
         </S.CardBackground>
      </>
   );
};
