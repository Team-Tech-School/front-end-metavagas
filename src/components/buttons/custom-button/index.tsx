//import special components
import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
//import style
import { Button } from "./style";

// tipagem
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   updateSearchPlaceholder: (text: string) => void;
   selectedButton: string;
   setSelectedButton: Dispatch<SetStateAction<string>>;
}
export const CustomButton = ({ title, updateSearchPlaceholder, selectedButton, setSelectedButton }: CustomButtonProps) => {
   const isSelected = selectedButton === title;

   const handleClick = () => {
      setSelectedButton(title);
      updateSearchPlaceholder(title);
   };
   return (
      <Button isSelected={isSelected} onClick={handleClick}>
         {title}
      </Button>
   );
};
