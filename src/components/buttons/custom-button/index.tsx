import React from "react";
import { Button } from "./style";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    updateSearchPlaceholder: (text: string) => void;
    selectedButton: string;
    setSelectedButton: React.Dispatch<React.SetStateAction<string>>;
   
}
export const CustomButton = ({title, updateSearchPlaceholder, selectedButton, setSelectedButton }: CustomButtonProps) => {
  const isSelected = selectedButton === title;

    const handleClick = () => {
      setSelectedButton(title)
      updateSearchPlaceholder(title);
    
    }
    return (
        
            <Button isSelected={isSelected}    onClick={handleClick}>{title}</Button>
        
    )
}