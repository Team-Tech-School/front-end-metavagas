import styled from "styled-components";

export const PurpleBackgroundDiv = styled.div`
   margin-top: -25px;
   background-color: ${props => props.theme.colors.darkPurple};
   width: 100%;
`;
export const DivButton = styled.div`
    display: flex; 
    gap: 5px;
    margin-left: 150px;    
`

//Corpo da pagina

export const ContainerBodyPageDIV = styled.div`
margin-top: 30px;
margin-left: 140px;
margin-right: 50px;
margin-bottom: 30px;
`
export const ContainerFilterResult = styled.div`
 border: 2px solid ${({ theme }) => theme.colors.darkPurple};
 display: flex;
 gap: 5px;

`
export const FilterDiv = styled.div`
margin-top: 30px;
margin-right: 7px;
margin-bottom: 30px;
padding: 20px;
width: 270px;
height: 1115px;
top: 457px;
left: 135px;
border-radius: 16px;
border: 1px solid #ECF1F4;
box-shadow: 0px 15px 35px 0px rgba(208, 208, 208, 0.2); /* Sombra definida com as propriedades especificadas */
 
`
export const HeadDivisionDiv = styled.div`
display: flex;
justify-content: space-between;
`
export const FilterTitle = styled.div`
font-family: 'Poppins', sans-serif;
font-weight: 700;
font-size: 18px;
line-height: 24.57px;
color: #000000;
`

export const ClearLink = styled.a`
font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 16.8px;
color: #6950A1;
 
  cursor: pointer;
`;
export const ResultDiv = styled.div`
border: 2px solid ${({ theme }) => theme.colors.darkPurple};
width: 100%;
margin-top: 30px;
margin-left: 8px;
margin-bottom: 30px;
`
export const ButtonAboveImages = styled.div`
  position: absolute;
  top:87%; /* Ajuste conforme necessário */
  left: 48%; /* Ajuste conforme necessário */
  transform: translateX(-50%);
  z-index: 1; /* Para ficar acima das imagens */
  &:nth-child(1) {
    top:87%;
  }
  &:nth-child(2) {
    top:87%; /* Ajuste conforme necessário */
    left: 81%; /* Ajuste conforme possível */
  }

`;
export const GraphicDiv = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;


`
