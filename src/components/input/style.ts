import styled from "styled-components";

export const Icon = styled.div`
   position: absolute;
   left: 30px;
   top: 55%;
   transform: translateY(-50%);
   cursor: pointer;
`;

export const IconAndInput = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: flex-start;
`;

export const InputWrapper = styled.div`
   position: relative;
   margin-top: 30px;

   &.error {
      input {
         border-color: ${({ theme }) => theme.colors.red};
         outline-color: ${({ theme }) => theme.colors.red};
      }
   }

   &.active {
      input {
         border-color: ${({ theme }) => theme.colors.green};
         outline-color: ${({ theme }) => theme.colors.green};
      }
   }
`;

export const Label = styled.label`
   font-size: 17px;
   color: ${({ theme }) => theme.colors.darkPurple};
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   letter-spacing: 0.1px;
   position: absolute;
   margin-top: -20px;
   left: 10px;
   padding: 0px 5px;
`;

export const Input = styled.input`
   font-size: 17px;
   border: 1px solid ${({ theme }) => theme.colors.lightGray};
   height: 55px;
   background-color: "#f1f1f1";
   border-radius: 9px;
   padding: 27px 10px 27px 50px;
   outline: none;
   color: ${({ theme }) => theme.colors.darkPurple};
   width: 450px;
   margin: 12px;

   &::placeholder {
      color: ${({ theme }) => theme.colors.midGray};
      font-style: italic;
      font-size: 17px;
      padding: 0px 3px;
   }

   &:focus {
      border-color: ${({ theme }) => theme.colors.green};
      outline-color: ${({ theme }) => theme.colors.green};

      ~ label {
         color: ${({ theme }) => theme.colors.green};
      }
   }
`;
