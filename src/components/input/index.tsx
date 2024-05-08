import * as S from "./style";
import { IconContext } from "react-icons";

type InputProps = {
   id: string;
   placeholder: string;
   icon?: any;
   iconColor: string;
   size: string;
   label: string;
};

const Input = ({ id, placeholder, icon, iconColor, size, label }: InputProps) => {
   return (
      <S.InputWrapper>
         <S.Label htmlFor={id}>{label}</S.Label>
         <S.IconAndInput>
            <IconContext.Provider value={{ color: iconColor, size: size }}>
               <div>{icon && <S.Icon>{icon}</S.Icon>}</div>
            </IconContext.Provider>
            <S.Input id={id} placeholder={placeholder} />
         </S.IconAndInput>
      </S.InputWrapper>
   );
};

export default Input;
