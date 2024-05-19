// import react

//import styles
import { BackgroundImage, Container } from "./style";
//import images

//import components

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
