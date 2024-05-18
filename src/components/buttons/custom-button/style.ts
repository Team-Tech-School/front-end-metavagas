import styled from "styled-components";

interface ButtonProps {
   selected: boolean;
}

export const Button = styled.button<ButtonProps>`
   background-color: ${(props) => (props.selected ? "blue" : "orange")};
   color: white;
   padding: 8px 16px;
   border: none;
   border-radius: 4px;
   cursor: pointer;
`;
