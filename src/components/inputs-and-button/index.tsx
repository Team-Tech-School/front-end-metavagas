//import components
import { Input, OrangeButton } from "../../components/index";
//import assets
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
//import style
import * as S from "./style";
import { useState } from "react";

//tipagem
interface InputsAndButtonProps {
   searchPlaceholder: string;
   cityPlaceholder: string;
   colorWhiteLabel?: boolean;
}

export const InputsAndButton = ({ searchPlaceholder, cityPlaceholder, colorWhiteLabel }: InputsAndButtonProps) => {
   // States for each input of form.
   const [search, setSearch] = useState("");
   const [city, setCity] = useState("");

   const handleSubmit = () => {};

   return (
      <>
         <form onSubmit={handleSubmit}>
            <S.ContentDiv>
               <S.DivForInputs>
                  <Input
                     onChange={(e) => setSearch(e.target.value)}
                     value={search}
                     label="O quê você procura?"
                     whiteLabel={colorWhiteLabel}
                     id="search"
                     placeholder={searchPlaceholder}
                     icon={<PiMagnifyingGlassBold />}
                     iconColor="gray"
                     size="22px"
                  />
                  <Input
                     onChange={(e) => setCity(e.target.value)}
                     value={city}
                     label="Onde?"
                     whiteLabel={colorWhiteLabel}
                     id="city"
                     placeholder={cityPlaceholder}
                     icon={<GrLocation />}
                     iconColor="gray"
                     size="22px"
                  />
               </S.DivForInputs>
               <S.ButtonDiv>
                  <OrangeButton title="Buscar vagas" link="/buscar-vagas" width="small" type="submit" />
               </S.ButtonDiv>
            </S.ContentDiv>
         </form>
      </>
   );
};
