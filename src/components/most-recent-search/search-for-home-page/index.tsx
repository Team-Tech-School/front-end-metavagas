import * as S from "./style";
import { Title } from "../../index";
import { useState, useEffect } from "react";

interface ButtonProps {
   title: string;
}

export const SearchButton = ({ title }: ButtonProps) => {
   return <S.Button>{title}</S.Button>;
};

export const MostRecentSearch = () => {
   const [recentSearches, setRecentSearches] = useState<string[]>([]);

   useEffect(() => {
      const storedSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
      setRecentSearches(storedSearches);
   }, []);

   return (
      <S.Container>
         <Title color="#1a1033" fontWeight="400" fontSize="14px">
            Buscas mais recentes:
         </Title>
         <S.ContentDiv>
            {recentSearches.map((search, index) => (
               <SearchButton key={index} title={search} />
            ))}
         </S.ContentDiv>
      </S.Container>
   );
};
