import { useNavigate } from "react-router-dom";
import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   width?: "large" | "medium" | "small";
   onClick?: () => void;
   link?: string;
}

export const OrangeButton = ({ title, width, link, onClick }: ButtonProps) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (onClick) {
         onClick();
      }
      navigate(link as any);
   };

   return (
      <S.Button onClick={handleClick} width={width}>
         {title}
      </S.Button>
   );
};
