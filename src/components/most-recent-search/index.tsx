import * as S from "./style";
import { Title } from "../index";

interface ButtonProps {
   title: string;
}

const RecentSearchButton = ({ title }: ButtonProps) => {
   return <S.Button>{title}</S.Button>;
};

export const MostRecentSearch = () => {
   return (
      <S.Container>
         <Title color="#1a1033" fontWeight="500" fontSize="14px">
            Buscas mais recentes:
         </Title>
         <S.ContentDiv>
            <RecentSearchButton title="Java" />
            <RecentSearchButton title="PHP" />
            <RecentSearchButton title="Python" />
            <RecentSearchButton title="React" />
         </S.ContentDiv>
      </S.Container>
   );
};
