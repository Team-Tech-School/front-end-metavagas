import { useNavigate } from "react-router-dom";
import * as S from "./style";

type Props = {
   title: string;
   link?: string;
   width?: "large" | "small";
};

export const OrangeButton = ({ title, link, width = "large" }: Props) => {
<<<<<<< HEAD
   // Define um valor padrão para width
=======
>>>>>>> bca0e08efc198a28792d3cfea772144c84b84807
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
