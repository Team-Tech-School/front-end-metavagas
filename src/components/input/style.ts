import styled, { css } from "styled-components";

interface IconProps {
   left?: boolean;
   right?: boolean;
}

interface LabelProps {
   whiteLabel?: boolean;
}

interface InputProps {
   padding?: string;
}

export const Icon = styled.div<IconProps>`
   position: absolute;
   top: 65%;
   transform: translateY(-50%);
   cursor: pointer;

   ${({ left }) =>
      left &&
      css`
         left: 25px;
      `}

   ${({ right }) =>
      right &&
      css`
         right: 30px;
      `}
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
      label {
         color: ${({ theme }) => theme.colors.red};
      }
   }

   &.success {
      input {
         border-color: ${({ theme }) => theme.colors.green};
         outline-color: ${({ theme }) => theme.colors.green};
      }

      label {
         color: ${({ theme }) => theme.colors.green};
      }
   }
`;

export const Label = styled.label<LabelProps>`
   font-size: 15px;
   font-weight: 500;
   letter-spacing: 0.1px;
   position: absolute;
   margin-top: -20px;
   left: 7px;
   padding: 0px 5px;
   color: ${({ theme }) => theme.colors.darkPurple};

   ${({ whiteLabel, theme }) =>
      whiteLabel &&
      css`
         color: ${theme.colors.white};
      `}
`;

export const Input = styled.input<InputProps>`
   font-size: 15px;
   border: 1px solid ${({ theme }) => theme.colors.lightGray};
   height: 50px;
   background-color: "#f1f1f1";
   border-radius: 9px;
   padding: ${({ padding }) => padding};
   outline: none;
   color: ${({ theme }) => theme.colors.darkPurple};
   width: 430px;
   margin: 10px 7px 0px 7px;

   &::placeholder {
      color: ${({ theme }) => theme.colors.midGray};
      font-style: italic;
      font-size: 14px;
      padding: 0px -1px;
   }

   &:focus {
      border-color: ${({ theme }) => theme.colors.darkGray};
      outline-color: ${({ theme }) => theme.colors.darkGray};
   }
`;
