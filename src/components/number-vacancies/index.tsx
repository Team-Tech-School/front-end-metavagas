import * as S from "./style";
import { SpanResult } from "./style";

interface Props {
   searchPlaceholder: string;
   vacanciesFound: number;
}

export const NumberVacancies = ({ searchPlaceholder, vacanciesFound }: Props) => {
   return (
      <>
         <S.H1>
            Vagas em <S.SpanTitle>{searchPlaceholder ? searchPlaceholder : "Tudo"}</S.SpanTitle>
         </S.H1>
         {vacanciesFound === 1 ? <SpanResult>{vacanciesFound} vaga encontrada</SpanResult> : <SpanResult>{vacanciesFound} vagas encontradas</SpanResult>}
      </>
   );
};
