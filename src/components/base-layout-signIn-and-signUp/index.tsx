//import special components
import { Outlet } from "react-router-dom";
//import components
import { Title, PurpleCard } from "../index";
//import assets
import Emoji from "../../assets/icons/emoji.png";
//import style
import * as S from "./style";

export const BaseLayoutSignInSignUp = () => {
   return (
      <>
         <Outlet />
         <S.ContentDiv>
            <S.TitleAndCardsWrapper>
               <S.TitleDiv>
                  <Title color="#1a1033" fontWeight="600" fontSize="30px">
                     Cadastrar na <br /> Meta Vagas é <br /> simples
                  </Title>
                  <S.Img src={Emoji} />
               </S.TitleDiv>
               <S.CardsDiv>
                  <PurpleCard cardNumber="01" title="Crie sua conta" />
                  <PurpleCard cardNumber="02" title="Busque pela sua vaga" />
                  <PurpleCard cardNumber="03" title="Receba sugestões" />
               </S.CardsDiv>
            </S.TitleAndCardsWrapper>
         </S.ContentDiv>
      </>
   );
};
