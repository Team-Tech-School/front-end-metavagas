import * as S from "./style";
import { Title } from "../../index";

type Props = {
   cardNumber: string;
   title: string;
};

export const PurpleCard = ({ cardNumber, title }: Props) => {
   return (
      <S.ContentDiv>
         <S.Number>{cardNumber}</S.Number>
         <S.Title>{title}</S.Title>
         <S.TitlesDiv>
            <Title color="#f1f1f1" fontWeight="400" fontSize="15px">
               Lorem ipsum dolor sit amet
            </Title>
         </S.TitlesDiv>
         <S.TitlesDiv>
            <Title color="#f1f1f1" fontWeight="400" fontSize="15px">
               consectetur. Nec nunc
            </Title>
         </S.TitlesDiv>
         <Title color="#f1f1f1" fontWeight="400" fontSize="15px">
            scelerisque nulla mauris.
         </Title>
         <S.TitlesDiv></S.TitlesDiv>
      </S.ContentDiv>
   );
};
