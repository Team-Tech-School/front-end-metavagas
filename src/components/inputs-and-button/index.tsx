import { OrangeButton, Input } from "../../components/index";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import * as S from "./style";

export const InputsAndButton = () => {
   return (
      <>
         <S.ContentDiv>
            <S.ContentWrapper>
               <Input label="O quê você procura?" id="search" placeholder="Cargo, tecnologia ou palavra-chave" icon={<PiMagnifyingGlassBold />} iconColor="gray" size="25px" />
               <Input label="Onde?" id="city" placeholder="Localização" icon={<GrLocation />} iconColor="gray" size="25px" />
               <S.ButtonDiv>
                  <OrangeButton title="Buscar vagas" link="/buscar-vagas" width="small" />
               </S.ButtonDiv>
            </S.ContentWrapper>
         </S.ContentDiv>
      </>
   );
};
