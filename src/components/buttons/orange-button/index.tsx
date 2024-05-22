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
}

export const OrangeButton = ({ title, width, link }: ButtonProps) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (link) {
         navigate(link);
      }
   };

   return (
      <S.Button width={width} onClick={handleClick}>
         {title}
      </S.Button>
   );
};
