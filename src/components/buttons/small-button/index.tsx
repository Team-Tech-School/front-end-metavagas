import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   link?: string;
}

export const SmallButton = ({ title, link }: ButtonProps) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (link) {
         navigate(link);
      }
   };

   return <S.Button onClick={handleClick}>{title}</S.Button>;
};
