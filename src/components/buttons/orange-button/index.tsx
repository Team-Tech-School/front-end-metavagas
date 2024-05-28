import { useNavigate } from "react-router-dom";
import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   link?: string;
   width?: "large" | "medium" | "small";
   onClick?: () => void;
}

export const OrangeButton = ({ title, width, link, onClick }: ButtonProps) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (onClick) {
         onClick();
      } else if (link) {
         navigate(link);
      }
   };

   return (
      <S.Button onClick={handleClick} width={width}>
         {title}
      </S.Button>
   );
};
