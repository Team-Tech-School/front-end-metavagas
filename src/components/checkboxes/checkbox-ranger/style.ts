import styled from "styled-components";


export const SalaryRangeSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  width: 100%;
  height: 24px;
  margin-bottom: 5px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1A1033;
`;


export const Value = styled.span`
  width: 100%;
font-family: 'Poppins', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 19.6px;
color: #8C8CA1;
margin-bottom: 10px; /* Ajuste para dar espaçamento entre os elementos */
`;

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
    border: 2px solid #6950A1;
    background: #FFFFFF;
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