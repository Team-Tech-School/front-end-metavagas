import * as S from "./style";

type Props = {
   title: string;
};

const SmallButton = ({ title }: Props) => {
   return <S.Button>{title}</S.Button>;
};

export default SmallButton;
