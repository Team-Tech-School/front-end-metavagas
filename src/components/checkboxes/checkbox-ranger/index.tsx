// import hooks
import { ChangeEvent, useEffect, useState } from "react";

//import style
import * as S from "./style";

//tipagem
interface RangeSliderProps {
   min: number;
   max: number;
   step?: number;
   onChange: (values: { min: number; max: number }) => void;
 }
export const SalaryRangeCheckbox = ({min, max, step = 1, onChange}: RangeSliderProps) => {
   const [minValue, setMinValue] = useState(min);
   const [maxValue, setMaxValue] = useState(max);
 
   useEffect(() => {
     onChange({ min: minValue, max: maxValue });
   }, [minValue, maxValue, onChange]);
 
   const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
     const value = Math.min(Number(e.target.value), maxValue - step);
     setMinValue(value);
   };
 
   const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
     const value = Math.max(Number(e.target.value), minValue + step);
     setMaxValue(value);
   };
 
   const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

   return (
      <S.RangeContainer>
      <S.SliderTrack />
      <S.SliderRange left={getPercentage(minValue)} width={getPercentage(maxValue) - getPercentage(minValue)} />
      <S.Slider
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        style={{ zIndex: minValue > max - 100 ? 5 : 3 }}
      />
      <S.Slider
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        style={{ zIndex: 4 }}
      />
    </S.RangeContainer>
   );   
};
