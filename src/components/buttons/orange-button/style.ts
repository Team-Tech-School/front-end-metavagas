import styled from "styled-components";

interface ButtonProps {
   width?: "large" | "small";
}

export const Button = styled.button<ButtonProps>`
   ${({ width }) => (width === "large" ? "width: 290px;" : width === "small" ? "width: 170px;" : "")};
   padding: 15px 20px;
   border: none;
   border-radius: ${({ theme }) => theme.borderRadius.md};
   background-color: ${({ theme }) => theme.colors.orange};
   font-size: 17px;
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   color: ${({ theme }) => theme.colors.darkPurple};
   letter-spacing: 0.2px;
   cursor: pointer;
   width: fit-content;

   &:hover {
      color: ${({ theme }) => theme.colors.darkPurple};
      background-color: #e09738;
   }
`;
