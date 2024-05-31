import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   border: 1px solid ${({ theme }) => theme.colors.xtLightPurple};
   background-color: #fff;
   color: ${({ theme }) => theme.colors.xtLightPurple};
   padding: 5px 6px;
   border-radius: 6px;
   margin: 0px 5px;
`;
