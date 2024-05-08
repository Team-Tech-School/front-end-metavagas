import styled from "styled-components";

export const Button = styled.button`
   padding: 14px;
   width: 120px;
   border-color: ${({ theme }) => theme.colors.white};
   border-radius: ${({ theme }) => theme.borderRadius.md};
   border-width: 2px;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   font-size: 16.5px;
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   color: ${({ theme }) => theme.colors.white};
   letter-spacing: 0.4px;
   cursor: pointer;
`;
