import * as S from './style'
import { SpanResult } from './style'

interface Props {   
    searchPlaceholder: string
    vacanciesFound: number
}

export const NumberVacancies = ({searchPlaceholder,vacanciesFound}:Props) => {
    return(
        <>
        <S.H1>Vagas em <S.SpanTitle>{searchPlaceholder}</S.SpanTitle></S.H1>
        <SpanResult>{vacanciesFound} vagas encontradas</SpanResult>
        </>
    )
}