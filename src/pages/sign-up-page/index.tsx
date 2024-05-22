//import style
import * as S from "./style";
//import assets
import AddUserIcon from "../../assets/icons/user-add-line.png";
import EmailIcon from "../../assets/icons/mail-line.png";
//import components
import { Form, Title } from "../../components/index";

export const SignUpPage = () => {
   return (
      <>
         <S.PurpleBackgroundDiv>
            <Form buttonTitle="Cadastrar" isSignup={true} formTitle="Faça seu cadastro" linkText="Já é cadastrado? Faça o login" linkHref="/fazer-login" />
            <S.ContentDiv>
               <S.TitleContainer marginTop="-5px">
                  <Title color="#f1f1f1" fontWeight="400" fontSize="17px">
                     CADASTRE-SE
                  </Title>
               </S.TitleContainer>
               <S.TitleContainer marginTop="5px" marginBottom="13px">
                  <Title color="#fbb04d" fontWeight="600" fontSize="45px">
                     Fique por dentro
                  </Title>
                  <S.TitleContainer marginTop="-14px">
                     <Title color="#fbb04d" fontWeight="600" fontSize="45px">
                        de todas as vagas
                     </Title>
                  </S.TitleContainer>
               </S.TitleContainer>
               <S.TitleContainer marginTop="10px" marginBottom="13px">
                  <Title iconSrc={AddUserIcon} iconSize="25px" color="#f1f1f1" fontWeight="300" fontSize="15px">
                     Com um único cadastro você consegue encontrar a sua vaga
                  </Title>
               </S.TitleContainer>
               <S.TitleContainer marginTop="5px" marginBottom="13px">
                  <Title iconSrc={EmailIcon} iconSize="25px" color="#f1f1f1" fontWeight="300" fontSize="15px">
                     Receba alertas sobre as vagas que você procura
                  </Title>
               </S.TitleContainer>
            </S.ContentDiv>
         </S.PurpleBackgroundDiv>
      </>
   );
};
