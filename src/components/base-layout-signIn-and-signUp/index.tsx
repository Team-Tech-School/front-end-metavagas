import { Outlet } from "react-router-dom";
import Title from "../title";
import PurpleCard from "../cards/purple-card";
import * as S from "./style";

const BaseLayoutSignInSignUp = () => {
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

export default BaseLayoutSignInSignUp;
