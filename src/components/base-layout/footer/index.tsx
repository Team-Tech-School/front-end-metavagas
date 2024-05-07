import Logo from "../../../assets/images/metavagas.png";
import LargeButton from "../../buttons/large-button";
import SmallButton from "../../buttons/small-button";
import * as S from "./style";

export const Footer = () => {
   return (
      <>
         <S.PurpleBackground>
            <S.ContentWrapper>
               <S.LogoAndContactWrapper>
                  <S.Logo src={Logo} />
                  <S.ContactAndAddressWrapper>
                     <S.Title>Contato e Endereço</S.Title>
                     <S.Information>4003-5442</S.Information>
                     <S.Information>contato@arnia.com.br</S.Information>
                     <S.Information>
                        Av. do Contorno, 2905 Santa Efigênia, <br /> Belo Horizonte - MG, 30110-080
                     </S.Information>
                  </S.ContactAndAddressWrapper>
               </S.LogoAndContactWrapper>
               <S.ButtonsWrapper>
                  <SmallButton title="Entrar" />
                  <LargeButton title="Cadastre-se gratuitamente" />
               </S.ButtonsWrapper>
            </S.ContentWrapper>
         </S.PurpleBackground>
      </>
   );
};

export default Footer;
