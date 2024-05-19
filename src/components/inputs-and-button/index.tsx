import { Input, OrangeButton } from "../../components/index";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import * as S from "./style";

interface InputsAndButtonProps {
   searchPlaceholder: string;
   cityPlaceholder: string;
   colorWhiteLabel?: boolean;
}

export const InputsAndButton = ({ searchPlaceholder, cityPlaceholder, colorWhiteLabel }: InputsAndButtonProps) => {
   return (
      <>
         <S.ContentDiv>
            <S.DivForInputs>
               <Input label="O quê você procura?" whiteLabel={colorWhiteLabel} id="search" placeholder={searchPlaceholder} icon={<PiMagnifyingGlassBold />} iconColor="gray" size="22px" />
               <Input label="Onde?" whiteLabel={colorWhiteLabel} id="city" placeholder={cityPlaceholder} icon={<GrLocation />} iconColor="gray" size="22px" />
            </S.DivForInputs>
            <S.ButtonDiv>
               <OrangeButton title="Buscar vagas" link="/buscar-vagas" width="small" />
            </S.ButtonDiv>
         </S.ContentDiv>
      </>
   );
};
