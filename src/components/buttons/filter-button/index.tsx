import { FilterButtonStyled } from "./style";

interface FilterButtonProps {
    onClickExecuteSearch: () => void;
}


export const FilterButton = ({onClickExecuteSearch}: FilterButtonProps) => {
    return (
        <>
        <FilterButtonStyled onClick={onClickExecuteSearch}>Filtrar</FilterButtonStyled>
        </>
    )
}