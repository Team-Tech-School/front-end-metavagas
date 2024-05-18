import styled from "styled-components";

interface ButtonProps {

  isSelected:boolean

}



export const Button = styled.button<ButtonProps>`

  background-color: ${props => (props.isSelected ?  '#FBB04D' : '#1a1033')}; // Altera a cor do botão quando selecionado
  color: white;
  padding: 8px 16px;
  padding-right: 8px;
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 50px;
  border: 1px solid white ;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;

