import Logo from "../../../assets/images/metavagas.png";
import Phone from "../../../assets/icons/telefone.png";
import Email from "../../../assets/icons/email.png";
import Location from "../../../assets/icons/local.png";
import { OrangeButton, SmallButton, Title } from "../../index";
import * as S from "./style";
import { useState, useEffect } from "react";

type Props = {
   showButton: boolean;
};

export const Footer = ({ showButton }: Props) => {
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
                     <Title color="#fbb04d" fontWeight="400" fontSize="16px">
                        Contato e Endereço
                     </Title>
                     <Title iconSrc={Phone} iconSize="28px" color="#f1f1f1" fontWeight="300" fontSize="16px">
                        4003-5442
                     </Title>
                     <Title iconSrc={Email} iconSize="28px" color="#f1f1f1" fontWeight="300" fontSize="16px">
                        contato@arnia.com.br
                     </Title>
                     <Title iconSrc={Location} iconSize="28px" color="#f1f1f1" fontWeight="300" fontSize="16px">
                        Av. do Contorno, 2905 Santa Efigênia, <br /> Belo Horizonte - MG, 30110-080
                     </Title>
                  </S.ContactAndAddressDiv>
               </S.LogoAndContactDiv>
               {isShowButton ? (
                  <S.ButtonsDiv>
                     <SmallButton title="Entrar" link="/fazer-login" />
                     <OrangeButton title="Cadastre-se gratuitamente" link="/fazer-cadastro" />
                  </S.ButtonsDiv>
               ) : null}
            </S.ContentDiv>
         </S.PurpleBackground>
      </S.FooterWrapper>
   );
};
