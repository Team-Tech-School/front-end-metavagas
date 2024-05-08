import { useNavigate } from "react-router-dom";
import * as S from "./style";

type Props = {
   title: string;
   link?: string;
};

const LargeButton = ({ title, link }: Props) => {
   const navigate = useNavigate();

   const handleClick = () => {
      if (link) {
         navigate(link);
      }
   };

   return <S.Button onClick={handleClick}>{title}</S.Button>;
};

export default LargeButton;
