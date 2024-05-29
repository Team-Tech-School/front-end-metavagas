import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

interface ButtonProps {
   isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
   background-color: ${(props) => (props.isSelected ? "#FBB04D" : "#1a1033")};
   color: ${(props) => (props.isSelected ? theme.colors.white : theme.colors.lightPurple)};
   padding: 5px 16px;
   margin-top: 10px;
   margin-right: 12px;
   margin-bottom: 50px;
   border: 1px solid ${(props) => (props.isSelected ? theme.colors.white : theme.colors.lightPurple)};
   border-radius: 4px;
   cursor: pointer;
   text-align: center;
`;
