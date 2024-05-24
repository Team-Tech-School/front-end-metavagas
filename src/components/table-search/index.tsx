import { BackgroundImage, Container } from "./style";

interface BlurredImageWithButtonProps {
   src: string;
   blurred?: boolean;
}

export const BlurredImageWith = ({ src, blurred }: BlurredImageWithButtonProps) => {
   return (
      <Container blurred={blurred}>
         <BackgroundImage src={src} alt="tableBrazil" />
      </Container>
   );
};
