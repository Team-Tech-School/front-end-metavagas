import styled from "styled-components";

export const FormWrapper = styled.div`
   background-color: white;
   padding: 45px 30px;
   border-radius: 15px;
   height: fit-content;
   width: 480px;
   margin: auto;
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   top: 23%;
   right: 8.95%;
   box-shadow: 0 1px 3px rgba(211, 211, 211, 0.4), 0 1px 12px rgba(211, 211, 211, 0.4);
`;

export const FormTitle = styled.div`
   margin-bottom: 10px;
   margin-top: -10px;
   font-size: 22px;
   font-weight: 700;
   color: ${({ theme }) => theme.colors.lightPurple};
   text-align: left;
   align-self: flex-start;
`;

export const LinkWrapper = styled.div`
   margin-top: 20px;
   text-align: center;
`;

export const FormLink = styled.a`
   color: ${({ theme }) => theme.colors.darkPurple};
   font-size: 15px;
   text-decoration: none;

   &:hover {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
   }
`;

export const DivForMargin = styled.div<{ marginTop?: string; marginBottom?: string }>`
   margin-top: ${(props) => props.marginTop || "0"};
   margin-bottom: ${(props) => props.marginBottom || "0"};
`;
