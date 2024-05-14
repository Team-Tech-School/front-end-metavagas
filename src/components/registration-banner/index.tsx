import { IconContext } from "react-icons";
import { FiUserPlus } from "react-icons/fi";
import PurpleCircle from "../../assets/images/purple-circle.png";
import { Title } from "../index";
import * as S from "./style";

export const RegistrationBanner = () => {
   return (
      <S.Container>
         <S.InnerContainer>
            <S.CircleImage src={PurpleCircle} />
            <S.IconWrapper>
               <IconContext.Provider value={{ color: "#fbb04d", size: "25px" }}>
                  <FiUserPlus />
               </IconContext.Provider>
            </S.IconWrapper>
         </S.InnerContainer>
         <S.TextContainer>
            <div style={{ marginBottom: "4px" }}>
               <Title color="#1a1033" fontSize="16px" fontWeight="400">
                  Faça seu <S.Underline>cadastro gratuito</S.Underline> e
               </Title>
            </div>
            <div style={{ marginBottom: "4px" }}>
               <Title color="#1a1033" fontSize="16px" fontWeight="400">
                  encontre vagas de acordo
               </Title>
            </div>
            <Title color="#1a1033" fontSize="16px" fontWeight="400">
               com o seu perfil.
            </Title>
         </S.TextContainer>
      </S.Container>
   );
};
