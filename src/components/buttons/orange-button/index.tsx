import { useNavigate } from "react-router-dom";
import * as S from "./style";

type Props = {
   title: string;
   link?: string;
   width?: "large" | "small";
};

export const OrangeButton = ({ title, link, width = "large" }: Props) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (link) {
         navigate(link);
      }
   };

   return (
      <S.Button onClick={handleClick} width={width}>
         {title}
      </S.Button>
   );
};
