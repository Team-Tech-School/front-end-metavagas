import * as S from "./style";
import { Title } from "../../index";

interface CardProps {
   cardNumber: string;
   title: string;
}

export const PurpleCard = ({ cardNumber, title }: CardProps) => {
   return (
      <S.ContentDiv>
         <S.Number>{cardNumber}</S.Number>
         <S.Title>{title}</S.Title>
         <S.TitlesDiv>
            <Title color="#f1f1f1" fontWeight="400" fontSize="15px">
               Lorem ipsum dolor sit amet <br />
            </Title>
         </S.TitlesDiv>
         <S.TitlesDiv>
            <Title color="#f1f1f1" fontWeight="400" fontSize="15px">
               consectetur. Nec nunc
            </Title>
         </S.TitlesDiv>
         <S.TitlesDiv>
            <Title color="#f1f1f1" fontWeight="400" fontSize="15px">
               scelerisque nulla mauris.
            </Title>
         </S.TitlesDiv>
      </S.ContentDiv>
   );
};
