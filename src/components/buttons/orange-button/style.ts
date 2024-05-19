import styled from "styled-components";

interface ButtonProps {
   width?: "large" | "medium" | "small";
}

const getWidth = (width?: "large" | "medium" | "small") => {
   switch (width) {
      case "large":
         return "430px";
      case "medium":
         return "290px";
      case "small":
         return "150px";
      default:
         return "fit-content";
   }
};

export const Button = styled.button<ButtonProps>`
   width: ${({ width }) => getWidth(width)};
   padding: 12px;
   border: none;
   border-radius: ${({ theme }) => theme.borderRadius.md};
   background-color: ${({ theme }) => theme.colors.orange};
   font-size: 16px;
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   color: ${({ theme }) => theme.colors.darkPurple};
   letter-spacing: 0.2px;
   cursor: pointer;

   &:hover {
      color: ${({ theme }) => theme.colors.darkPurple};
      background-color: #e09738;
   }
`;
