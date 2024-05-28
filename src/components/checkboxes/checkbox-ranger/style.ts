import styled from "styled-components";



export const RangeContainer = styled.div`
position: relative;
width: 100%;
height: 50px;
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
    width: 16px;
    height: 16px;
    border: 2px solid  #6950A1;
    background: #FFFFFF ;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    pointer-events: all;
    width: 16px;
    height: 16px;
    border: 2px solid #FFFFFF;
    background: #6950A1;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const SliderTrack = styled.div`
position: absolute;
height: 4px;
background: #ddd;
top: 50%;
transform: translateY(-50%);
width: 100%;
border-radius: 2px;
`;

export const SliderRange = styled.div<{ left: number; width: number }>`
position: absolute;
height: 4px;
background: #6950A1;
top: 50%;
transform: translateY(-50%);
left: ${(props) => props.left}%;
width: ${(props) => props.width}%;
border-radius: 3px;
z-index: 2;
`;