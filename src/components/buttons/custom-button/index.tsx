import React, { useState } from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   title: string;
   updateSearchPlaceholder: (text: string) => void;
}

export const CustomButton = ({ title, updateSearchPlaceholder }: CustomButtonProps) => {
   const [selected, setSelected] = useState<Boolean>(false);
   const handleClick = () => {
      setSelected(!selected);

      updateSearchPlaceholder(title);
   };
   return (
      <button className={selected ? "selected" : ""} onClick={handleClick}>
         {title}
      </button>
   );
};
