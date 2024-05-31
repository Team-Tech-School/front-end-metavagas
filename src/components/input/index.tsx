import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
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
   value?: string;
   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
   hasError?: boolean;
   isSuccess?: boolean;
}

export const Input = ({
   id,
   placeholder,
   icon,
   iconColor,
   size,
   label,
   whiteLabel = false,
   isForPasswordShow = false,
   padding = "1.25em 0.63em 1.25em 3.13em",
   value,
   onChange,
   hasError,
   isSuccess,
}: InputProps) => {
   const [showPassword, setShowPassword] = useState(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <S.InputWrapper className={`${hasError ? "error" : ""} ${isSuccess ? "success" : ""}`}>
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
            <S.Input id={id} type={isForPasswordShow ? (showPassword ? "text" : "password") : "text"} placeholder={placeholder} padding={padding} value={value} onChange={onChange} />
         </S.IconAndInput>
      </S.InputWrapper>
   );
};
