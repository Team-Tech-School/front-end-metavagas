//import assets
import Logo from "../../../assets/images/metavagas.png";
import Phone from "../../../assets/icons/telefone.png";
import Email from "../../../assets/icons/email.png";
import Location from "../../../assets/icons/local.png";
//import components
import { OrangeButton, SmallButton, Title } from "../../index";
// import hooks
import { useState, useEffect } from "react";
//import style
import * as S from "./style";

// tipagem
interface FooterProps {
   showButton: boolean;
}

export const Footer = ({ showButton }: FooterProps) => {
   // State made to show buttons if the user isn't logged in.
   const [isShowButton, setIsShowButton] = useState(showButton);

   useEffect(() => {
      setIsShowButton(showButton);
   }, [showButton]);

   return (
      <S.FooterWrapper>
         <S.PurpleBackground>
            <S.ContentDiv>
               <S.LogoAndContactDiv>
                  <S.Logo src={Logo} />
                  <S.ContactAndAddressDiv>
                     <S.TitleContainer marginBottom="10px">
                        <Title color="#fbb04d" fontWeight="500" fontSize="15px">
                           Contato e Endereço
                        </Title>
                     </S.TitleContainer>
                     <S.TitleContainer marginBottom="13px">
                        <Title iconSrc={Phone} iconSize="23px" color="#f1f1f1" fontWeight="300" fontSize="15px">
                           4003-5442
                        </Title>
                     </S.TitleContainer>
                     <S.TitleContainer marginBottom="13px">
                        <Title iconSrc={Email} iconSize="23px" color="#f1f1f1" fontWeight="300" fontSize="15px">
                           contato@arnia.com.br
                        </Title>
                     </S.TitleContainer>
                     <S.TitleContainer marginBottom="13px">
                        <Title iconSrc={Location} iconSize="23px" color="#f1f1f1" fontWeight="300" fontSize="15px">
                           Av. do Contorno, 2905 Santa Efigênia,
                        </Title>
                        <S.TitleContainer marginTop="8px" marginLeft="30px">
                           <Title color="#f1f1f1" fontWeight="300" fontSize="15px">
                              Belo Horizonte - MG, 30110-080
                           </Title>
                        </S.TitleContainer>
                     </S.TitleContainer>
                  </S.ContactAndAddressDiv>
               </S.LogoAndContactDiv>
               {isShowButton ? (
                  <S.ButtonsDiv>
                     <SmallButton title="Entrar" link="/fazer-login" />
                     <OrangeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" width="medium" />
                  </S.ButtonsDiv>
               ) : null}
            </S.ContentDiv>
         </S.PurpleBackground>
      </S.FooterWrapper>
   );
};
