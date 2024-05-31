import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   border: 0.06em solid ${({ theme }) => theme.colors.xtLightPurple};
   background-color: #fff;
   color: ${({ theme }) => theme.colors.xtLightPurple};
   padding: 0.31em 0.38em;
   border-radius: 0.38em;
   margin: 0em 0.31em;
`;
