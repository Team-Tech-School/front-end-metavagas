import * as S from "./style";

interface BlurredImageWithButtonProps {
   src: string;
   blurred?: boolean;
}

export const BlurredImageWith = ({ src, blurred }: BlurredImageWithButtonProps) => {
   return (
      <S.Container blurred={blurred}>
         <S.BackgroundImage src={src} />
      </S.Container>
   );
};
