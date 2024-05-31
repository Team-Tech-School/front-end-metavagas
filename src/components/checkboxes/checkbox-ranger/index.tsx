import { useState } from "react";
import * as S from "./style";

interface SalaryRangerSliderProps {
   onSalaryChange: (minSalary: number, maxSalary: number) => void;
}

export const SalaryRangerSlider = ({ onSalaryChange }: SalaryRangerSliderProps) => {
   const [minSalary, setMinSalary] = useState(0);
   const [maxSalary, setMaxSalary] = useState(30000);

   const handleMinSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (value <= maxSalary) {
         setMinSalary(value);
         onSalaryChange(value, maxSalary);
      }
   };

   const handleMaxSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (value >= minSalary) {
         setMaxSalary(value);
         onSalaryChange(minSalary, value);
      }
   };
   const getPercentage = (value: number) => (value / 30000) * 100;

   const minSalaryPercentage = getPercentage(minSalary);
   const maxSalaryPercentage = getPercentage(maxSalary);

   return (
      <S.SalaryRangeSliderContainer>
         <S.Label>Faixa salarial</S.Label>
         <S.Value>
            R$ {minSalary} - R$ {maxSalary}
         </S.Value>
         <S.RangeContainer>
            <S.SliderTrack />
            <S.SliderRange left={minSalaryPercentage} width={maxSalaryPercentage - minSalaryPercentage} />
            <S.Slider type="range" value={minSalary} onChange={handleMinSalaryChange} min="0" max="30000" step="100" style={{ zIndex: minSalary > maxSalary - 100 ? 5 : 3 }} />
            <S.Slider type="range" value={maxSalary} onChange={handleMaxSalaryChange} min="0" max="30000" step="100" style={{ zIndex: 4 }} />
         </S.RangeContainer>
      </S.SalaryRangeSliderContainer>
   );
};
