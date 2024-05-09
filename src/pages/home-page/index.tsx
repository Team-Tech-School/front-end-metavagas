import * as S from "./style";
import ManWithLaptop from "../../assets/images/man-with-laptop.png";
import { Title, InputsAndButton } from "../../components/index";

export const HomePage = () => {
   return (
      <>
         <S.PurpleBackgroundDiv>
            <S.ContentDiv>
               <Title color="#f1f1f1" fontWeight="400" fontSize="18px">
                  MAIS DE 12.000 VAGAS DE TECNOLOGIA,
                  <br />
                  REUNIDAS EM UM SÓ LUGAR
               </Title>
               <S.ForMainTitleDiv>
                  <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                     Encontre a sua
                     <br />
                  </Title>
                  <S.ForWhiteTitleDiv>
                     <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                        vaga de <S.StyledSpan> react</S.StyledSpan>
                     </Title>
                  </S.ForWhiteTitleDiv>
               </S.ForMainTitleDiv>
            </S.ContentDiv>
            <S.StyledImg src={ManWithLaptop} />
            <S.WhiteBackground>
               <InputsAndButton />
            </S.WhiteBackground>
         </S.PurpleBackgroundDiv>
      </>
   );
};
