import styled from "styled-components";

interface CheckboxOptionProps {
   checked: boolean;
}

export const CheckboxFilterContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 0.63em;
`;

export const CheckboxLabel = styled.label`
   margin-bottom: 0.5rem;
`;

export const CheckboxInput = styled.input`
   margin-right: 0.2rem;
   width: 0.94em;
   height: 0.94em;
   cursor: pointer;

   &:before {
      content: "";
      display: inline-block;
      width: 0.94em;
      height: 0.94em;
      border: 0.06em solid #808080;
   }
`;
export const H4Title = styled.h4`
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   font-size: 1em;
   line-height: 1.5em;
   color: #1a1033;
   margin-bottom: 0.63em;
   margin-left: -0.31em;
`;
export const CheckboxOption = styled.span<CheckboxOptionProps>`
   font-size: 0.88em;
   font-weight: ${(props) => (props.checked ? "700" : "400")};
   color: "#212121";
   margin-left: 0.31em;
`;
