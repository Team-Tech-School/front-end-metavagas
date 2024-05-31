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
         left: 1.5em;
      `}

   ${({ right }) =>
      right &&
      css`
         right: 2.3em;
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
   margin-top: 1.88em;

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
   font-size: 0.9em;
   font-weight: 500;
   letter-spacing: 0.01em;
   position: absolute;
   margin-top: -1.25em;
   left: 0.42em;
   padding: 0em 0.31em;
   color: ${({ theme }) => theme.colors.darkPurple};

   ${({ whiteLabel, theme }) =>
      whiteLabel &&
      css`
         color: ${theme.colors.white};
      `}
`;

export const Input = styled.input<InputProps>`
   font-size: 0.94em;
   border: 0.06em solid ${({ theme }) => theme.colors.lightGray};
   height: 3.5em;
   background-color: "#f1f1f1";
   border-radius: 0.56em;
   padding: ${({ padding }) => padding};
   outline: none;
   color: ${({ theme }) => theme.colors.darkPurple};
   width: 29em;
   margin: 0.63em 0.44em 0em 0.44em;

   &::placeholder {
      color: ${({ theme }) => theme.colors.midGray};
      font-style: italic;
      font-size: 0.88em;
      padding: 0em -0.06em;
   }

   &:focus {
      border-color: ${({ theme }) => theme.colors.darkGray};
      outline-color: ${({ theme }) => theme.colors.darkGray};
   }
`;
