import styled from "styled-components";

export const Button = styled.button`
   padding: 0.63em 0.94em;
   width: 7.5em;
   border-color: ${({ theme }) => theme.colors.white};
   border-radius: ${({ theme }) => theme.borderRadius.md};
   border-width: 0.13em;
   background-color: ${({ theme }) => theme.colors.darkPurple};
   font-size: 1.03em;
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   color: ${({ theme }) => theme.colors.white};
   letter-spacing: 0.03em;
   cursor: pointer;

   &:hover {
      color: #ffffff;
      background-color: #1e133b;
   }
`;
