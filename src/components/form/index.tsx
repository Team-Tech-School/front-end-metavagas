import { Input, OrangeButton } from "../index";
import * as S from "./style";

type FormProps = {
   isSignup: boolean;
   formTitle: string;
   linkText: string;
   linkHref: string;
   buttonTitle: string;
};

export const Form = ({ isSignup, formTitle, linkText, linkHref, buttonTitle }: FormProps) => {
   return (
      <S.FormWrapper>
         <S.FormTitle>{formTitle}</S.FormTitle>
         <form>
            <S.DivForMargin marginBottom="65px">{isSignup && <Input id="name" placeholder="Digite seu nome" label="Seu nome" padding="20px 55px 20px 17px" />}</S.DivForMargin>
            <S.DivForMargin marginTop="-25px" marginBottom="45px">
               <Input id="email" placeholder="Digite seu email" label="Seu e-mail" padding="20px 55px 20px 17px" />
            </S.DivForMargin>
            <S.DivForMargin marginBottom="45px">
               <Input id="password" placeholder="Digite sua senha" label="Senha" isForPasswordShow={true} iconColor="gray" size="20px" padding="20px 55px 20px 17px" />
            </S.DivForMargin>
            <S.DivForMargin marginBottom="45px">
               {isSignup && <Input id="confirmPassword" placeholder="Confirme sua senha" label="Confirmar senha" isForPasswordShow={true} iconColor="gray" size="20px" padding="20px 55px 20px 17px" />}
            </S.DivForMargin>
         </form>
         <S.DivForMargin marginTop="-15px">
            <OrangeButton title={buttonTitle} link="/buscar-vagas" width="large" />
         </S.DivForMargin>
         <S.LinkWrapper>
            <S.FormLink href={linkHref}>{linkText}</S.FormLink>
         </S.LinkWrapper>
      </S.FormWrapper>
   );
};
