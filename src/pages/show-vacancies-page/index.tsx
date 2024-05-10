
import { useState } from "react";
import { InputsAndButton } from "../../components";
import * as S from "./style";
import { CustomButton } from "../../components/buttons/custom-button";
export const ShowVacanciesPage = () => {
  const [searchPlaceholder, setSearchPlaceholder] = useState("React");

  const updateSearchPlaceholder = (text: string) => {
    setSearchPlaceholder(text);
  }

  return (
    <>
      <div>
        <S.PurpleBackgroundDiv>         
         <InputsAndButton searchPlaceholder={searchPlaceholder} cityPlaceholder={"Localização"} colorWhiteLabel={true}/>

         <CustomButton title={"Java"} updateSearchPlaceholder={updateSearchPlaceholder}/>
         <CustomButton title={"PHP"} updateSearchPlaceholder={updateSearchPlaceholder}/>
         <CustomButton title={"Phyton"} updateSearchPlaceholder={updateSearchPlaceholder}/>
         <CustomButton title={"React"} updateSearchPlaceholder={updateSearchPlaceholder}/>
        </S.PurpleBackgroundDiv>
        <h1>Restantes dos componentes</h1>
      </div>
    </>
  );
};
