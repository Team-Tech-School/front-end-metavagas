import styled, { css } from "styled-components";

export const blurredStyle = css`
   filter: blur(5px);
`;
export const Container = styled.div<{ blurred?: boolean }>`
   position: relative;
   width: 440px;
   height: 280px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 8px;
   margin-right: -10px;
   ${(props) => props.blurred && blurredStyle}
`;
export const BackgroundImage = styled.img`
   position: absolute;
   width: 90%;
   height: 90%;
   background-size: cover;
   background-position: center;
`;
export const Button = styled.button`
   position: absolute;
   background-color: #fbb04d;
   color: #fff;
   padding: 10px 20px;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   font-size: 16px;
   font-weight: bold;
   text-align: center;

   &:hover {
      background-color: darken(#fbb04d, 10%);
   }

   &:active {
      background-color: darken(#fbb04d, 20%);
   }
`;
