import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   // link?: string;

   width?: "large" | "medium" | "small";
}

export const OrangeButton = ({ title, width }: ButtonProps) => {
   // const navigate = useNavigate();

   // const handleClick = () => {
   //    if (link) {
   //       navigate(link);
   //    }
   // }; onClick={handleClick}

   return <S.Button width={width}>{title}</S.Button>;
};
