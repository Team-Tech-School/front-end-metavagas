import styled from "styled-components";

interface CheckboxOptionProps {
   checked: boolean;
}

export const CheckboxFilterContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 10px;
`;
export const CheckboxLabel = styled.label`
   margin-bottom: 0.5rem;
`;
export const CheckboxInput = styled.input`
   margin-right: 0.5rem;
   width: 15px; /* Tornar quadrado */
   height: 15px; /* Tornar quadrado */
   cursor: pointer; /* Cursor pointer para indicar que é clicável */

   /* Estilização da caixa do checkbox */
   &:before {
      content: "";
      display: inline-block;
      width: 15px; /* Mesmo tamanho que o input */
      height: 15px; /* Mesmo tamanho que o input */
      border: 1px solid #808080; /* Borda cinza */
   }
`;
export const H4Title = styled.h4`
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   color: #1a1033;
   margin-bottom: 10px;
   margin-left: -5px;
`;
export const CheckboxOption = styled.span<CheckboxOptionProps>`
   font-size: 14px;
   font-weight: ${(props) => (props.checked ? "700" : "400")};
   color: "#212121";
   margin-left: 5px;
`;
