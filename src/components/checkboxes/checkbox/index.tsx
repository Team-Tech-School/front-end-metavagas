// import hooks
import { useState } from "react";
//import style
import * as S from "./style";

// tipagem
interface CheckboxProps {
   title: string;
   options: string[];
   onFilterChange: (selectedFilters: string[]) => void;
}

export const Checkbox = ({ title, options, onFilterChange }: CheckboxProps) => {
   const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

   const handleCheckboxChange = (option: string) => {
      const newFilters = selectedFilters.includes(option);
      const newSelectedFilters = [...selectedFilters];

      if (!newFilters) {
         newSelectedFilters.push(option);
      } else {
         newSelectedFilters.splice(newSelectedFilters.indexOf(option), 1);
      }
      setSelectedFilters(newSelectedFilters);
      onFilterChange(newSelectedFilters);
   };

   return (
      <S.CheckboxFilterContainer>
         <br />
         <S.H4Title>{title}</S.H4Title>
         {options.map((option) => (
            <S.CheckboxLabel key={option}>
               <S.CheckboxInput type="checkbox" name={option} checked={selectedFilters.includes(option)} onChange={() => handleCheckboxChange(option)} />
               <S.CheckboxOption checked={selectedFilters.includes(option)}>{option}</S.CheckboxOption>
            </S.CheckboxLabel>
         ))}
      </S.CheckboxFilterContainer>
   );
};
