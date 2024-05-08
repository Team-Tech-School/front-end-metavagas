import { useNavigate } from "react-router-dom";
import * as S from "./style";

type Props = {
   title: string;
   link?: string;
   width?: "large" | "small"; // Nova propriedade para definir a largura
};

const OrangeButton = ({ title, link, width = "large" }: Props) => {
   // Define um valor padrão para width
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

export default OrangeButton;
