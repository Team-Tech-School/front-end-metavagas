import { DetailedHTMLProps, FormEvent, FormHTMLAttributes, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Input, OrangeButton } from "../index";
import * as S from "./style";
import { useAuthContext } from "../../providers";

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
   const [isSuccess, setIsSuccess] = useState(false);

   const { register, login } = useAuthContext();
   const navigate = useNavigate();

   const handleNavigate = () => {
      if (link) {
         navigate(link);
      }
   };

   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();

      setNameError(false);
      setEmailError(false);
      setPasswordError(false);
      setConfirmPasswordError(false);
      setIsSuccess(false);

      let hasError = false;

      if (isSignup && password !== confirmPassword) {
         toast.warn("Senhas não estão iguais.");
         setPasswordError(true);
         setConfirmPasswordError(true);
         hasError = true;
      }

      if (isSignup) {
         if (!name) {
            setNameError(true);
            hasError = true;
         }
         if (!email) {
            setEmailError(true);
            hasError = true;
         }
         if (!password) {
            setPasswordError(true);
            hasError = true;
         }
         if (!confirmPassword) {
            setConfirmPasswordError(true);
            hasError = true;
         }

         if (hasError) {
            toast.error("Todos os campos são obrigatórios.");
            return;
         }

         try {
            await register({ name, email, password });
            toast.success("Cadastro realizado com sucesso.");
            setIsSuccess(true);
            setTimeout(() => {
               navigate("/fazer-login");
            }, 2000);
         } catch (error) {
            toast.error("Erro ao realizar cadastro.");
            setNameError(true);
            setEmailError(true);
            setPasswordError(true);
            setConfirmPasswordError(true);
         }
      } else {
         if (!email) {
            setEmailError(true);
            hasError = true;
         }
         if (!password) {
            setPasswordError(true);
            hasError = true;
         }

         if (hasError) {
            toast.error("Todos os campos são obrigatórios.");
            return;
         }

         try {
            await login({ email, password });
            toast.success("Login realizado com sucesso.");
            setIsSuccess(true);
            setTimeout(() => {
               navigate("/buscar-vagas");
            }, 2000);
         } catch (error) {
            toast.error("Erro ao realizar login.");
            setEmailError(true);
            setPasswordError(true);
         }
      }
   };

   return (
      <S.FormWrapper>
         <S.FormTitle>{formTitle}</S.FormTitle>
         <form onSubmit={handleSubmit}>
            {isSignup && (
               <S.DivForMargin marginBottom="3em">
                  <Input
                     id="name"
                     placeholder="Digite seu nome"
                     label="Seu nome"
                     padding="1.25em 3.44em 1.25em 1.06em"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     hasError={nameError}
                     isSuccess={isSuccess && !nameError}
                  />
               </S.DivForMargin>
            )}
            <S.DivForMargin marginTop="0.06em" marginBottom="2.81em">
               <Input
                  id="email"
                  placeholder="Digite seu email"
                  label="Seu e-mail"
                  padding="1.25em 3.44em 1.25em 1.06em"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  hasError={emailError}
                  isSuccess={isSuccess && !emailError}
               />
            </S.DivForMargin>
            <S.DivForMargin marginBottom="2.81em">
               <Input
                  id="password"
                  placeholder="Digite sua senha"
                  label="Senha"
                  isForPasswordShow={true}
                  iconColor="gray"
                  size="20px"
                  padding="1.25em 3.44em 1.25em 1.06em"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  hasError={passwordError}
                  isSuccess={isSuccess && !passwordError}
               />
            </S.DivForMargin>
            {isSignup && (
               <S.DivForMargin marginBottom="2.81em">
                  <Input
                     id="confirmPassword"
                     placeholder="Confirme sua senha"
                     label="Confirmar senha"
                     isForPasswordShow={true}
                     iconColor="gray"
                     size="20px"
                     padding="1.25em 3.44em 1.25em 1.06em"
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     hasError={confirmPasswordError}
                     isSuccess={isSuccess && !confirmPasswordError}
                  />
               </S.DivForMargin>
            )}
            <S.DivForMargin marginTop="-0.94em" marginLeft="0.31em">
               <OrangeButton title={buttonTitle} width="large" type="submit" />
            </S.DivForMargin>
         </form>
         <S.LinkWrapper>
            <S.FormLink onClick={handleNavigate}>{linkText}</S.FormLink>
         </S.LinkWrapper>
      </S.FormWrapper>
   );
};
