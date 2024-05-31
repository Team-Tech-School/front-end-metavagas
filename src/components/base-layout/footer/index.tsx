import Logo from "../../../assets/images/metavagas.png";
import Phone from "../../../assets/icons/telefone.png";
import Email from "../../../assets/icons/email.png";
import Location from "../../../assets/icons/local.png";
import { OrangeButton, SmallButton, Title } from "../../index";
import * as S from "./style";
import { useAuthContext } from "../../../providers";

export const Footer = () => {
   const { isLoggedIn } = useAuthContext();

   return (
      <S.FooterWrapper>
         <S.PurpleBackground>
            <S.ContentDiv>
               <S.LogoAndContactDiv>
                  <S.Logo src={Logo} />
                  <S.ContactAndAddressDiv>
                     <S.TitleContainer marginBottom="0.63em">
                        <Title color="#fbb04d" fontWeight="500" fontSize="0.94em">
                           Contato e Endereço
                        </Title>
                     </S.TitleContainer>
                     <S.TitleContainer marginBottom="0.81em">
                        <Title iconSrc={Phone} iconSize="1.44em" color="#f1f1f1" fontWeight="300" fontSize="0.94em">
                           4003-5442
                        </Title>
                     </S.TitleContainer>
                     <S.TitleContainer marginBottom="0.81em">
                        <Title iconSrc={Email} iconSize="1.44em" color="#f1f1f1" fontWeight="300" fontSize="0.94em">
                           contato@arnia.com.br
                        </Title>
                     </S.TitleContainer>
                     <S.TitleContainer marginBottom="0.81em">
                        <Title iconSrc={Location} iconSize="1.44em" color="#f1f1f1" fontWeight="300" fontSize="0.94em">
                           Av. do Contorno, 2905 Santa Efigênia,
                        </Title>
                        <S.TitleContainer marginTop="8px" marginLeft="30px">
                           <Title color="#f1f1f1" fontWeight="300" fontSize="0.94em">
                              Belo Horizonte - MG, 30110-080
                           </Title>
                        </S.TitleContainer>
                     </S.TitleContainer>
                  </S.ContactAndAddressDiv>
               </S.LogoAndContactDiv>
               {!isLoggedIn && (
                  <S.ButtonsDiv>
                     <SmallButton title="Entrar" link="/fazer-login" />
                     <OrangeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" width="medium" />
                  </S.ButtonsDiv>
               )}
            </S.ContentDiv>
         </S.PurpleBackground>
      </S.FooterWrapper>
   );
};
