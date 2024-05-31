import * as S from "./style";
import Salve from "../../assets/images/salve.png";

export const SaveSearch = () => {
   return (
      <S.Container>
         <S.RegularText>
            Salve essa busca, te <S.SpanBold>avisaremos por e-mail</S.SpanBold> quando encontrarmos mais vagas
         </S.RegularText>
         <S.ButtonSalved>
            <img src={Salve} alt="Salvar" />
            <S.SpanButton>Salvar busca</S.SpanButton>
         </S.ButtonSalved>
      </S.Container>
   );
};
