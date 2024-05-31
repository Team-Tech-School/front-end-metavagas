import * as S from "./style";
import AddUserIcon from "../../assets/icons/user-add-line.png";
import EmailIcon from "../../assets/icons/mail-line.png";
import { Form, Title } from "../../components/index";

export const SignUpPage = () => {
   return (
      <>
         <S.PurpleBackgroundDiv>
            <Form buttonTitle="Cadastrar" isSignup={true} formTitle="Faça seu cadastro" linkText="Já é cadastrado? Faça o login" link="/fazer-login" />
            <S.ContentDiv>
               <S.TitleContainer marginTop="-0.31em">
                  <Title color="#f1f1f1" fontWeight="400" fontSize="1.06em">
                     CADASTRE-SE
                  </Title>
               </S.TitleContainer>
               <S.TitleContainer marginTop="0.31em" marginBottom="0.81em">
                  <Title color="#fbb04d" fontWeight="600" fontSize="2.81em">
                     Fique por dentro
                  </Title>
                  <S.TitleContainer marginTop="-0.88em">
                     <Title color="#fbb04d" fontWeight="600" fontSize="2.81em">
                        de todas as vagas
                     </Title>
                  </S.TitleContainer>
               </S.TitleContainer>
               <S.TitleContainer marginTop="0.63em" marginBottom="0.81em">
                  <Title iconSrc={AddUserIcon} iconSize="1.56em" color="#f1f1f1" fontWeight="300" fontSize="0.94em">
                     Com um único cadastro você consegue encontrar a sua vaga
                  </Title>
               </S.TitleContainer>
               <S.TitleContainer marginTop="0.31em" marginBottom="0.81em">
                  <Title iconSrc={EmailIcon} iconSize="1.56em" color="#f1f1f1" fontWeight="300" fontSize="0.94em">
                     Receba alertas sobre as vagas que você procura
                  </Title>
               </S.TitleContainer>
            </S.ContentDiv>
         </S.PurpleBackgroundDiv>
      </>
   );
};
