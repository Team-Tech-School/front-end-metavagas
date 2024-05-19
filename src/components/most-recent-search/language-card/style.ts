import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   border: 1px solid ${({ theme }) => theme.colors.xtLightPurple};
   background-color: #fff;
   color: ${({ theme }) => theme.colors.xtLightPurple};
   padding: 6px 7px;
   border-radius: 7px;
   margin: 0px 5px; 
`;