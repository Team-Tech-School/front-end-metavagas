// import style
import { FilterButtonStyled } from "./style";

// tipagem
interface FilterButtonProps {
   onClickExecuteSearch: () => void;
}

export const FilterButton = ({ onClickExecuteSearch }: FilterButtonProps) => {
   return (
      <>
         <FilterButtonStyled onClick={onClickExecuteSearch}>Filtrar</FilterButtonStyled>
      </>
   );
};
