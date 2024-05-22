//import style
import * as S from "./style";
//import components
import { Title } from "../../index";

//tipagem
interface ButtonProps {
   title: string;
}

export const SearchButton = ({ title }: ButtonProps) => {
   return <S.Button>{title}</S.Button>;
};

export const MostRecentSearch = () => {
   return (
      <S.Container>
         <Title color="#1a1033" fontWeight="400" fontSize="14px">
            Buscas mais recentes:
         </Title>
         <S.ContentDiv>
            <SearchButton title="Java" />
            <SearchButton title="PHP" />
            <SearchButton title="Python" />
            <SearchButton title="React" />
         </S.ContentDiv>
      </S.Container>
   );
};
