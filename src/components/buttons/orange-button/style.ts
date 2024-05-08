import styled from "styled-components";

interface ButtonProps {
   width?: "large" | "small"; // Adicione a propriedade de largura
}

export const Button = styled.button<ButtonProps>`
   padding: 15px 20px;
   border: none;
   border-radius: ${({ theme }) => theme.borderRadius.md};
   background-color: ${({ theme }) => theme.colors.orange};
   font-size: 17px;
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   color: ${({ theme }) => theme.colors.darkPurple};
   letter-spacing: 0.2px;
   cursor: pointer;
   ${({ width }) => (width === "large" ? "width: 290px;" : width === "small" ? "width: 170px;" : "")};
`;
