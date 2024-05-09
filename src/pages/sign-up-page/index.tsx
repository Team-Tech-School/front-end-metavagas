import * as S from "./style";
import AddUserIcon from "../../assets/icons/user-add-line.png";
import EmailIcon from "../../assets/icons/mail-line.png";
import { Title } from "../../components/index";

export const SignUpPage = () => {
   return (
      <>
         <S.PurpleBackgroundDiv>
            <S.ContentDiv>
               <Title color="#f1f1f1" fontWeight="400" fontSize="18px">
                  CADASTRE-SE
               </Title>
               <div style={{ marginTop: "-15px", marginBottom: "13px" }}>
                  <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                     Fique por dentro
                  </Title>
                  <div style={{ marginTop: "-30px" }}>
                     <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                        de todas as vagas
                     </Title>
                  </div>
               </div>
               <Title iconSrc={AddUserIcon} iconSize="25px" color="#f1f1f1" fontWeight="300" fontSize="16px">
                  Com um único cadastro você consegue encontrar a sua vaga
               </Title>
               <Title iconSrc={EmailIcon} iconSize="25px" color="#f1f1f1" fontWeight="300" fontSize="16px">
                  Receba alertas sobre as vagas que você procura
               </Title>
            </S.ContentDiv>
         </S.PurpleBackgroundDiv>
      </>
   );
};
