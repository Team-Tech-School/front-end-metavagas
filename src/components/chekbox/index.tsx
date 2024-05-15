import { useState } from "react";
import * as S from "./style";

interface CheckboxProps {
    title: string;
    opstions: string[];
    onFilterChange: (selectedFilters: string[]) => void;
}
export const Checkbox = ({title, opstions, onFilterChange}: CheckboxProps) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

    const handleCheckboxChange = (option: string) => {
        const newFilters = selectedFilters.includes(option)
        const newSelectedFilters = [...selectedFilters];
        if(newFilters) {
            newSelectedFilters.push(option);
        } else {
            newSelectedFilters.splice(newSelectedFilters.indexOf(option), 1);
        }
        setSelectedFilters(newSelectedFilters);
        onFilterChange(newSelectedFilters);
    }

    return (
        <S.CheckboxFilterContainer> 
            <br />           
            <h4>{title}</h4>
            {opstions.map(option => (
                <S.CheckboxLabel key={option}>
                    <S.CheckboxInput
                        type="checkbox"
                        name={option}
                        checked={selectedFilters.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                    />
                    {option}
                </S.CheckboxLabel>
            ))}
        
        </S.CheckboxFilterContainer>
    );
}