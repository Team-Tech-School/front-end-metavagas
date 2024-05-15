import { Input } from "../index";
import styled from "styled-components";

type FormProps = {
   isSignup: boolean;
   formTitle: string;
   linkText: string;
   linkHref: string;
};

const FormWrapper = styled.div`
   background-color: white;
   padding: 20px;
   border-radius: 10px;
   height: fit-content;
   width: 480px;
   margin: auto;
   position: absolute;
   top: 30%;
`;

const FormTitle = styled.h2`
   text-align: center;
   color: ${({ theme }) => theme.colors.darkPurple};
`;

const LinkWrapper = styled.div`
   margin-top: 20px;
   text-align: center;
`;

const FormLink = styled.a`
   color: ${({ theme }) => theme.colors.blue};
   text-decoration: none;

   &:hover {
      text-decoration: underline;
   }
`;

export const Form = ({ isSignup, formTitle, linkText, linkHref }: FormProps) => {
   return (
      <FormWrapper>
         <FormTitle>{formTitle}</FormTitle>
         <form>
            {isSignup && <Input id="name" placeholder="Digite seu nome" label="Nome" size="20px" />}
            <Input id="email" placeholder="Digite seu email" label="Email" size="20px" />
            <Input id="password" placeholder="Digite sua senha" label="Senha" size="20px" isForPasswordShow />
            {isSignup && <Input id="confirmPassword" placeholder="Confirme sua senha" label="Confirmar Senha" size="20px" isForPasswordShow />}
         </form>
         <LinkWrapper>
            <FormLink href={linkHref}>{linkText}</FormLink>
         </LinkWrapper>
      </FormWrapper>
   );
};
