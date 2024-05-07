import Logo from "../../../assets/images/metavagas.png";
import LargeButton from "../../buttons/large-button";
import SmallButton from "../../buttons/small-button";
import * as S from "./style";

const Header = () => {
   return (
      <>
         <S.PurpleBackground>
            <S.ContentWrapper>
               <S.Logo src={Logo} />
               <S.ButtonsWrapper>
                  <SmallButton title="Entrar" />
                  <LargeButton title="Cadastre-se gratuitamente" />
               </S.ButtonsWrapper>
            </S.ContentWrapper>
         </S.PurpleBackground>
      </>
   );
};

export default Header;
