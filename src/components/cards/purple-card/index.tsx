import * as S from "./style";

type Props = {
   cardNumber: string;
   title: string;
};

const PurpleCard = ({ cardNumber, title }: Props) => {
   return (
      <S.ContentDiv>
         <S.Number>{cardNumber}</S.Number>
         <S.Title>{title}</S.Title>
         <h5>
            Lorem ipsum dolor sit amet <br /> consectetur. Nec nunc <br /> scelerisque nulla mauris.
         </h5>
      </S.ContentDiv>
   );
};

export default PurpleCard;
