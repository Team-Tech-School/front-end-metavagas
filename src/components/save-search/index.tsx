//import components 
import { ButtonSalved, Container, RegularText, SpanBold, SpanButton } from "./style"
//import icons 
import Salve from "../../assets/images/salve.png"


export const SaveSearch = () => {
    return (
        <Container>
            <RegularText>Salve essa busca, te <SpanBold>avisaremos por e-mail</SpanBold> quando encontrarmos mais vagas</RegularText>
            <ButtonSalved><img src={Salve} alt="Salvar" /><SpanButton>Salvar busca</SpanButton></ButtonSalved>
        </Container>  
    )
}