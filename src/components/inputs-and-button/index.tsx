import { Input, OrangeButton } from "../../components/index";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import * as S from "./style";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { useVacanciesContext } from "../../providers/vacancies-provider";

interface InputsAndButtonProps {
   searchPlaceholder: string;
   cityPlaceholder: string;
   colorWhiteLabel?: boolean;
   onKeyDown?: (event: KeyboardEvent) => void;
   link?: string;
}

export const InputsAndButton = ({ searchPlaceholder, cityPlaceholder, colorWhiteLabel, onKeyDown, link }: InputsAndButtonProps) => {
   const [value, setValue] = useState<string>("");
   const [city, setCity] = useState<string>("");
   const { fetchVacanciesByFilters } = useVacanciesContext();

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
               placeholder={searchPlaceholder}
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
               placeholder={cityPlaceholder}
               icon={<GrLocation />}
               iconColor="gray"
               size="22px"
               value={city}
               onChange={handleCityChange}
            />
         </S.DivForInputs>
         <S.ButtonDiv>
            <OrangeButton title="Buscar vagas" width="small" onClick={handleSearch} link={link} />
         </S.ButtonDiv>
      </S.ContentDiv>
   );
};
