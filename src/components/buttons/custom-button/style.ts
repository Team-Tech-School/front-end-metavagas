import styled from "styled-components";
import { theme } from "../../../assets/theme/theme";

interface ButtonProps {
   isSelected: boolean;
}

export const Button = styled.button<ButtonProps>`
   background-color: ${(props) => (props.isSelected ? "#FBB04D" : "#1a1033")};
   color: ${(props) => (props.isSelected ? theme.colors.white : theme.colors.lightPurple)};
   padding: 0.31em 1em;
   margin-top: 0.63em;
   margin-right: 0.75em;
   margin-bottom: 3.13em;
   border: 0.06em solid ${(props) => (props.isSelected ? theme.colors.white : theme.colors.lightPurple)};
   border-radius: 0.25em;
   cursor: pointer;
   text-align: center;
`;
