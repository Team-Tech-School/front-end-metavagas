import styled from "styled-components";

export const FormWrapper = styled.div`
   background-color: white;
   padding: 2.8em 1.95em;
   border-radius: 0.94em;
   height: fit-content;
   width: 31em;
   margin: auto;
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   top: 10em;
   right: 8.95%;
   box-shadow: 0 0.06em 0.19em rgba(211, 211, 211, 0.4), 0 0.06em 0.75em rgba(211, 211, 211, 0.4);
   margin-bottom: 2em;
`;

export const FormTitle = styled.div`
   margin-bottom: 0.4em;
   margin-top: -0.3em;
   font-size: 1.38em;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.lightPurple};
   text-align: left;
   align-self: flex-start;
`;

export const LinkWrapper = styled.div`
   margin-top: 1.25em;
   text-align: center;
`;

export const FormLink = styled.div`
   color: ${({ theme }) => theme.colors.darkPurple};
   font-size: 0.94em;
   text-decoration: none;
   cursor: pointer;

   &:hover {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
   }
`;

export const DivForMargin = styled.div<{ marginTop?: string; marginBottom?: string; marginLeft?: string; marginRight?: string }>`
   margin-top: ${(props) => props.marginTop || "0"};
   margin-bottom: ${(props) => props.marginBottom || "0"};
   margin-left: ${(props) => props.marginLeft || "0"};
   margin-right: ${(props) => props.marginRight || "0"};
`;
