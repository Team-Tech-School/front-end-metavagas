import { FormEvent, useState } from "react";
import { Input, OrangeButton } from "../index";
import * as S from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../providers/auth-provider";

type FormProps = {
   isSignup: boolean;
   formTitle: string;
   linkText: string;
   linkHref: string;
   buttonTitle: string;
};

export const Form = ({ isSignup, formTitle, linkText, linkHref, buttonTitle }: FormProps) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const { register, login } = useAuthContext();

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      console.log("Form values:", { name, email, password, confirmPassword });
      try {
         if (isSignup && password !== confirmPassword) {
            return toast.error("Senhas não estão iguais.");
         }
         if (isSignup) {
            if (!name || !email || !password) {
               return toast.error("Todos os campos são obrigatórios.");
            }
            await register({ name, email, password });
            toast.success("Cadastro realizado com sucesso.");
         } else {
            if (!email || !password) {
               return toast.error("Todos os campos são obrigatórios.");
            }
            await login({ email, password });
            toast.success("Login realizado com sucesso.");
         }
      } catch (error) {
         console.error("Erro ao enviar o formulário.", error);
         toast.error("Erro ao enviar o formulário.");
      }
   };

   return (
      <S.FormWrapper>
         <S.FormTitle>{formTitle}</S.FormTitle>
         <form onSubmit={handleSubmit}>
            {isSignup && (
               <S.DivForMargin marginBottom="48px">
                  <Input id="name" placeholder="Digite seu nome" label="Seu nome" padding="20px 55px 20px 17px" value={name} onChange={(e) => setName(e.target.value)} />
               </S.DivForMargin>
            )}
            <S.DivForMargin marginTop="1px" marginBottom="45px">
               <Input id="email" placeholder="Digite seu email" label="Seu e-mail" padding="20px 55px 20px 17px" value={email} onChange={(e) => setEmail(e.target.value)} />
            </S.DivForMargin>
            <S.DivForMargin marginBottom="45px">
               <Input
                  id="password"
                  placeholder="Digite sua senha"
                  label="Senha"
                  isForPasswordShow={true}
                  iconColor="gray"
                  size="20px"
                  padding="20px 55px 20px 17px"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </S.DivForMargin>
            {isSignup && (
               <S.DivForMargin marginBottom="45px">
                  <Input
                     id="confirmPassword"
                     placeholder="Confirme sua senha"
                     label="Confirmar senha"
                     isForPasswordShow={true}
                     iconColor="gray"
                     size="20px"
                     padding="20px 55px 20px 17px"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                  />
               </S.DivForMargin>
            )}
            <S.DivForMargin marginTop="-15px" marginLeft="5px">
               <OrangeButton title={buttonTitle} width="large" type="submit" />
            </S.DivForMargin>
         </form>
         <S.LinkWrapper>
            <S.FormLink href={linkHref}>{linkText}</S.FormLink>
         </S.LinkWrapper>
      </S.FormWrapper>
   );
};
