import * as S from "./style";

type Props = {
   title: string;
};

const LargeButton = ({ title }: Props) => {
   return <S.Button>{title}</S.Button>;
};

export default LargeButton;
