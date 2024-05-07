import styled from "styled-components";

export const Button = styled.button`
   padding: 15px 20px;
   width: 290px;
   border: none;
   border-radius: ${({ theme }) => theme.borderRadius.md};
   background-color: ${({ theme }) => theme.colors.orange};
   font-size: 17px;
   font-weight: ${({ theme }) => theme.fontWeight.midMedium};
   color: ${({ theme }) => theme.colors.darkPurple};
   letter-spacing: 0.2px;
`;
