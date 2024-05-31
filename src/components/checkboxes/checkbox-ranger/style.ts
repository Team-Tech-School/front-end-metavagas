import styled from "styled-components";

export const SalaryRangeSliderContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-left: 0.44em;
   margin-bottom: -0.75em;
`;

export const Label = styled.label`
   width: 100%;
   height: 1.5em;
   margin-bottom: 0.31em;
   margin-top: 1.25em;
   font-family: "Poppins", sans-serif;
   font-weight: 500;
   font-size: 1em;
   line-height: 1.5em;
   color: #1a1033;
`;

export const Value = styled.span`
   width: 100%;
   font-family: "Poppins", sans-serif;
   font-weight: 400;
   font-size: 0.88em;
   line-height: 1.23em;
   color: #8c8ca1;
   margin-bottom: -0.31em;
`;

export const RangeContainer = styled.div`
   position: relative;
   width: 90%;
   height: 3.13em;
`;

export const Slider = styled.input`
   position: absolute;
   width: 100%;
   top: 35%;
   pointer-events: none;
   -webkit-appearance: none;
   background: transparent;

   &::-webkit-slider-thumb {
      pointer-events: all;
      width: 1em;
      height: 1em;
      border: 0.13em solid #6950a1;
      background: #ffffff;
      border-radius: 50%;
      cursor: pointer;
      -webkit-appearance: none;
   }

   &::-moz-range-thumb {
      pointer-events: all;
      width: 1em;
      height: 1em;
      border: 0.13em solid #ffffff;
      background: #6950a1;
      border-radius: 50%;
      cursor: pointer;
   }
`;

export const SliderTrack = styled.div`
   position: absolute;
   height: 0.25em;
   background: #ddd;
   top: 50%;
   transform: translateY(-50%);
   width: 100%;
   border-radius: 0.13em;
`;

export const SliderRange = styled.div<{ left: number; width: number }>`
   position: absolute;
   height: 0.25em;
   background: #6950a1;
   top: 50%;
   transform: translateY(-50%);
   left: ${(props) => props.left}%;
   width: ${(props) => props.width}%;
   border-radius: 0.19em;
   z-index: 2;
`;
