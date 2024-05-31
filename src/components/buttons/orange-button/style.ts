import styled from "styled-components";

interface ButtonProps {
   width?: "large" | "medium" | "small";
}

const getWidth = (width?: "large" | "medium" | "small") => {
   switch (width) {
      case "large":
         return "26.88em";
      case "medium":
         return "18.13em";
      case "small":
         return "9.38em";
      default:
         return "fit-content";
   }
};

export const Button = styled.button<ButtonProps>`
   width: ${({ width }) => getWidth(width)};
   padding: 0.75em;
   border: none;
   border-radius: ${({ theme }) => theme.borderRadius.md};
   background-color: ${({ theme }) => theme.colors.orange};
   font-size: 1em;
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   color: ${({ theme }) => theme.colors.darkPurple};
   letter-spacing: 0.01em;
   cursor: pointer;

   &:hover {
      color: ${({ theme }) => theme.colors.darkPurple};
      background-color: #e09738;
   }
`;
