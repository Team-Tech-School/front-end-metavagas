//import special components
import { useNavigate } from "react-router-dom";
import { ButtonHTMLAttributes } from "react";
//import style
import * as S from "./style";

// tipagem
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   link?: string;
   width?: "large" | "medium" | "small";
   onClick?: () => void; // Adicionando onClick opcional
}

export const OrangeButton = ({ title, width, link, onClick }: ButtonProps) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (onClick) {
         onClick(); // Chama o callback onClick se fornecido
      } else if (link) {
          navigate(link);
       }
   }; 

   return <S.Button onClick={handleClick} width={width}>{title}</S.Button>;
}
