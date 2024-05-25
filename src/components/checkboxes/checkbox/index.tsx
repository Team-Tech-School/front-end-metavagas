// import hooks
import { useState } from "react";
//import style
import * as S from "./style";

// tipagem
interface CheckboxProps {
   title: string;
   opstions: string[];
   onFilterChange: (selectedFilters: string[]) => void;
   selectedFilters: string[];
}

export const Checkbox = ({ title, opstions, onFilterChange, selectedFilters }: CheckboxProps) => {
   const handleCheckboxChange = (option: string) => {
      const newFilters = selectedFilters.includes(option);
      const newSelectedFilters = [...selectedFilters];
      if (!newFilters) {
         newSelectedFilters.push(option);
      } else {
         newSelectedFilters.splice(newSelectedFilters.indexOf(option), 1);
      }

      onFilterChange(newSelectedFilters);
   };

   return (
      <S.CheckboxFilterContainer>
         <br />
         <S.H4Title>{title}</S.H4Title>
         {opstions.map((option) => (
            <S.CheckboxLabel key={option}>
               <S.CheckboxInput type="checkbox" name={option} checked={selectedFilters.includes(option)} onChange={() => handleCheckboxChange(option)} />
               <S.CheckboxOption checked={selectedFilters.includes(option)}>{option}</S.CheckboxOption>
            </S.CheckboxLabel>
         ))}
      </S.CheckboxFilterContainer>
   );
};
