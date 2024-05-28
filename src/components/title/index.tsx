import * as S from "./style";

interface TitleProps {
   iconSrc?: string;
   iconSize?: string;
   color?: string;
   fontWeight?: string;
   fontSize?: string;
   children: React.ReactNode;
}

export const Title = ({ iconSrc, iconSize, color, fontWeight, fontSize, children }: TitleProps) => {
   return (
      <>
         <S.StyledTitle color={color} fontWeight={fontWeight} fontSize={fontSize}>
            <S.IconAndTitleDiv>
               {iconSrc && <S.IconImage src={iconSrc} iconSize={iconSize} />}
               {children}
            </S.IconAndTitleDiv>
         </S.StyledTitle>
      </>
   );
};
