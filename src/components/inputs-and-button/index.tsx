import { Input, OrangeButton } from "../../components/index";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import * as S from "./style";
import { ChangeEvent, useState, useEffect, KeyboardEvent } from "react";
import { useVacanciesContext } from "../../providers";

interface InputsAndButtonProps {
   searchValue: string;
   cityValue: string;
   colorWhiteLabel?: boolean;
   onKeyDown?: (event: KeyboardEvent) => void;
   updateSearchTerm?: (searchTerm: string) => void | string;
   updateCityTerm?: (cityTerm: string) => void | string;
   onSearch?: () => void;
}

const updateRecentSearches = (newSearch: string) => {
   if (!newSearch.trim()) return;

   const storedSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
   const updatedSearches = [newSearch, ...storedSearches.filter((search: string) => search !== newSearch)];

   if (updatedSearches.length > 4) {
      updatedSearches.pop();
   }

   localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
};

export const InputsAndButton = ({ searchValue, cityValue, colorWhiteLabel, onKeyDown, updateSearchTerm, updateCityTerm, onSearch }: InputsAndButtonProps) => {
   const [value, setValue] = useState<string>(searchValue);
   const [city, setCity] = useState<string>(cityValue);
   const { fetchVacanciesByFilters } = useVacanciesContext();

   useEffect(() => {
      setValue(searchValue);
   }, [searchValue]);

   useEffect(() => {
      setCity(cityValue);
   }, [cityValue]);

   const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
   };

   const handleSearch = async () => {
      const filter = {
         tecName: value,
         location: city,
      };
      try {
         await fetchVacanciesByFilters(filter);
         updateRecentSearches(value);

         if (updateSearchTerm) {
            updateSearchTerm(value);
         }

         if (updateCityTerm) {
            updateCityTerm(city);
         }

         localStorage.setItem("searchValue", value);
         localStorage.setItem("cityValue", city);

         if (onSearch) {
            onSearch();
         }
      } catch (error) {
         console.error("Failed to fetch vacancies by filters:", error);
      }
   };

   return (
      <S.ContentDiv>
         <S.DivForInputs>
            <Input
               onKeyDown={onKeyDown}
               label="O quê você procura?"
               whiteLabel={colorWhiteLabel}
               id="search"
               placeholder={"Cargo, tecnologia ou palavra-chave"}
               icon={<PiMagnifyingGlassBold />}
               iconColor="gray"
               size="22px"
               value={value}
               onChange={handleValueChange}
            />
            <Input
               onKeyDown={onKeyDown}
               label="Onde?"
               whiteLabel={colorWhiteLabel}
               id="city"
               placeholder={"Localização"}
               icon={<GrLocation />}
               iconColor="gray"
               size="22px"
               value={city}
               onChange={handleCityChange}
            />
         </S.DivForInputs>
         <S.ButtonDiv>
            <OrangeButton title="Buscar vagas" width="small" onClick={handleSearch} />
         </S.ButtonDiv>
      </S.ContentDiv>
   );
};
