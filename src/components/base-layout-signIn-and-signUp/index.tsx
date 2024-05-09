import { Outlet } from "react-router-dom";
import { Title, PurpleCard } from "../index";
import * as S from "./style";

export const BaseLayoutSignInSignUp = () => {
   return (
      <>
         <Outlet />
         <S.ContentDiv>
            <S.TitleAndCardsWrapper>
               <Title color="#1a1033" fontWeight="600" fontSize="30px">
                  Cadastrar na <br /> Meta Vagas é <br /> simples 👉
               </Title>
               <S.CardsDiv>
                  <PurpleCard cardNumber="01" title="Crie sua conta" />
                  <PurpleCard cardNumber="01" title="Crie sua conta" />
                  <PurpleCard cardNumber="01" title="Crie sua conta" />
               </S.CardsDiv>
            </S.TitleAndCardsWrapper>
         </S.ContentDiv>
      </>
   );
};
