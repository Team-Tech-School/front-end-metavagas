import * as S from "./style";

interface ButtonProps {
   title: string;
}

export const RecentSearchButton = ({ title }: ButtonProps) => {
   return <S.Button>{title}</S.Button>;
};
