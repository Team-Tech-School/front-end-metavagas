//import components
import { Input, OrangeButton } from "../../components/index";
//import assets
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
//import style
import * as S from "./style";
import { ChangeEvent, useState } from "react";

//import context
import { useVacancyFilterContext } from "../../providers/search-vacanci-filter/index";

//tipagem
interface InputsAndButtonProps {
   searchPlaceholder: string;
   cityPlaceholder: string;
   colorWhiteLabel?: boolean;
}

export const InputsAndButton = ({ searchPlaceholder, cityPlaceholder, colorWhiteLabel }: InputsAndButtonProps) => {
   const [value, setValue] = useState<string>("");
   const [city, setCity] = useState<string>("");
   
   const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   }
   const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
   }

   // Chama o Context Provider que faz a requisição da Api e retorna os dados
   const {fetchVacancies, vacancies, loading, error} = useVacancyFilterContext();
   const handleSearch = () =>{
      const filter = {
         tecName: value,
         location: city
      }
      console.log(filter)
      fetchVacancies(filter)
   }
   return (
      <>
         <S.ContentDiv>
            <S.DivForInputs>
               <Input 
               label="O quê você procura?" 
               whiteLabel={colorWhiteLabel} 
               id="search" placeholder={searchPlaceholder} 
               icon={<PiMagnifyingGlassBold />} 
               iconColor="gray" size="22px" 
               value={value} 
               onChange={handleValueChange}
               />
               <Input 
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
               <OrangeButton title="Buscar vagas" width="small" onClick={handleSearch} />
            </S.ButtonDiv>
         </S.ContentDiv>
      </>
   );
};
