import { DetailedHTMLProps, FormEvent, FormHTMLAttributes, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, OrangeButton } from "../index";
import * as S from "./style";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../../providers/auth-provider";

interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
   isSignup: boolean;
   formTitle: string;
   linkText: string;
   link: string;
   buttonTitle: string;
}

export const Form = ({ isSignup, formTitle, linkText, link, buttonTitle }: FormProps) => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   const [nameError, setNameError] = useState(false);
   const [emailError, setEmailError] = useState(false);
   const [passwordError, setPasswordError] = useState(false);
   const [confirmPasswordError, setConfirmPasswordError] = useState(false);

   const [nameActive, setNameActive] = useState(false);
   const [emailActive, setEmailActive] = useState(false);
   const [passwordActive, setPasswordActive] = useState(false);
   const [confirmPasswordActive, setConfirmPasswordActive] = useState(false);

   const [formSuccess, setFormSuccess] = useState(false);

   const { register, login } = useAuthContext();
   const navigate = useNavigate();

   const handleNavigate = () => {
      if (link) {
         navigate(link);
      }
   };

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      let hasError = false;

      if (isSignup && password !== confirmPassword) {
         toast.error("Senhas não estão iguais.");
         setPasswordError(true);
         setConfirmPasswordError(true);
         hasError = true;
      }

      if (isSignup) {
         if (!name) {
            setNameError(true);
            hasError = true;
         } else {
            setNameError(false);
         }
         if (!email) {
            setEmailError(true);
            hasError = true;
         } else {
            setEmailError(false);
         }
         if (!password) {
            setPasswordError(true);
            hasError = true;
         } else {
            setPasswordError(false);
         }
         if (!confirmPassword) {
            setConfirmPasswordError(true);
            hasError = true;
         } else {
            setConfirmPasswordError(false);
         }

         if (hasError) {
            toast.error("Todos os campos são obrigatórios.");
            return;
         }

         try {
            await register({ name, email, password });
            toast.success("Cadastro realizado com sucesso.");
            setFormSuccess(true);
            setTimeout(() => {
               navigate("/fazer-login");
            }, 2000); // Redirecionar após 2 segundos
         } catch (error) {
            setNameError(true);
            setEmailError(true);
            setPasswordError(true);
            setConfirmPasswordError(true);
            toast.error("Erro ao realizar cadastro.");
         }
      } else {
         if (!email) {
            setEmailError(true);
            hasError = true;
         } else {
            setEmailError(false);
         }
         if (!password) {
            setPasswordError(true);
            hasError = true;
         } else {
            setPasswordError(false);
         }

         if (hasError) {
            toast.error("Todos os campos são obrigatórios.");
            return;
         }

         try {
            await login({ email, password });
            toast.success("Login realizado com sucesso.");
            setFormSuccess(true);
            setTimeout(() => {
               navigate("/login");
            }, 2000); // Redirecionar após 2 segundos
         } catch (error) {
            setEmailError(true);
            setPasswordError(true);
            toast.error("Erro ao realizar login.");
         }
      }
   };

   useEffect(() => {
      setNameActive(!!name);
      setEmailActive(!!email);
      setPasswordActive(!!password);
      setConfirmPasswordActive(!!confirmPassword);
   }, [name, email, password, confirmPassword]);

   return (
      <S.FormWrapper>
         <S.FormTitle>{formTitle}</S.FormTitle>
         <form onSubmit={handleSubmit}>
            {isSignup && (
               <S.DivForMargin marginBottom="48px">
                  <Input
                     id="name"
                     placeholder="Digite seu nome"
                     label="Seu nome"
                     padding="20px 55px 20px 17px"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     hasError={nameError}
                     isActive={nameActive}
                     isSuccess={formSuccess && !nameError}
                  />
               </S.DivForMargin>
            )}
            <S.DivForMargin marginTop="1px" marginBottom="45px">
               <Input
                  id="email"
                  placeholder="Digite seu email"
                  label="Seu e-mail"
                  padding="20px 55px 20px 17px"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  hasError={emailError}
                  isActive={emailActive}
                  isSuccess={formSuccess && !emailError}
               />
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
                  hasError={passwordError}
                  isActive={passwordActive}
                  isSuccess={formSuccess && !passwordError}
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
                     hasError={confirmPasswordError}
                     isActive={confirmPasswordActive}
                     isSuccess={formSuccess && !confirmPasswordError}
                  />
               </S.DivForMargin>
            )}
            <S.DivForMargin marginTop="-15px" marginLeft="5px">
               <OrangeButton title={buttonTitle} width="large" type="submit" />
            </S.DivForMargin>
         </form>
         <S.LinkWrapper>
            <S.FormLink onClick={handleNavigate}>{linkText}</S.FormLink>
         </S.LinkWrapper>
      </S.FormWrapper>
   );
};
