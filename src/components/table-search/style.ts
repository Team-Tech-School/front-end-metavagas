import styled, { css } from "styled-components";

export const blurredStyle = css`
   filter: blur(0.31em);
`;

export const Container = styled.div<{ blurred?: boolean }>`
   position: relative;
   width: 27.5em;
   height: 17.5em;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 0.5em;
   margin-right: -0.5em;
   ${(props) => props.blurred && blurredStyle}
`;

export const BackgroundImage = styled.img`
   position: absolute;
   width: 25.8em;
   background-size: cover;
   background-position: center;
`;

export const Button = styled.button`
   position: absolute;
   background-color: #fbb04d;
   color: #fff;
   padding: 0.63em 1.25em;
   border: none;
   border-radius: 0.5em;
   cursor: pointer;
   font-size: 1em;
   font-weight: bold;
   text-align: center;

   &:hover {
      background-color: darken(#fbb04d, 10%);
   }

   &:active {
      background-color: darken(#fbb04d, 20%);
   }
`;
