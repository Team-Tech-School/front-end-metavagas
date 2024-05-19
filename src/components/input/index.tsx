import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import * as S from "./style";
import { IconContext } from "react-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
   id: string;
   placeholder: string;
   icon?: any;
   iconColor?: string;
   size?: any;
   label: string;
   whiteLabel?: boolean;
   isForPasswordShow?: boolean;
   padding?: string;
}

export const Input = ({ id, placeholder, icon, iconColor, size, label, whiteLabel = false, isForPasswordShow = false, padding = "20px 10px 20px 50px" }: InputProps) => {
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
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                     </S.Icon>
                  )}
               </div>
            </IconContext.Provider>
            <S.Input id={id} type={isForPasswordShow ? (showPassword ? "text" : "password") : "text"} placeholder={placeholder} padding={padding} />
         </S.IconAndInput>
      </S.InputWrapper>
   );
};
