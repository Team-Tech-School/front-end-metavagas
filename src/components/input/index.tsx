import { useState } from "react";
import * as S from "./style";
import { IconContext } from "react-icons";

type InputProps = {
   id: string;
   placeholder: string;
   icon?: any;
   iconColor?: string;
   size: string;
   label: string;
   whiteLabel?: boolean;
   isForPasswordShow?: boolean;
};

export const Input = ({ id, placeholder, icon, iconColor, size, label, whiteLabel = false, isForPasswordShow = false }: InputProps) => {
   const [showPassword, setShowPassword] = useState(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <S.InputWrapper>
         <S.Label htmlFor={id} whiteLabel={whiteLabel}>
            {label}
         </S.Label>
         <S.IconAndInput>
            <IconContext.Provider value={{ color: iconColor, size: size }}>
               <div>
                  {icon && !isForPasswordShow && <S.Icon left>{icon}</S.Icon>}
                  {isForPasswordShow && (
                     <S.Icon right onClick={toggleShowPassword}>
                        {showPassword ? "🙈" : "👁️"}
                     </S.Icon>
                  )}
               </div>
            </IconContext.Provider>
            <S.Input id={id} type={isForPasswordShow && showPassword ? "text" : "password"} placeholder={placeholder} />
         </S.IconAndInput>
      </S.InputWrapper>
   );
};
