//import Styled
import * as S from "./style";
//import components
import { RecentSearchButton } from "../most-recent-search/language-card";
//import icons
import Cifrao from "../../assets/images/cifrao.png";
import Local from "../../assets/images/local-mini.png";
import Computer from "../../assets/images/computer-line.png";
// import component
import { NewCard } from "../index";

//tipagem
interface InfoJobsProps {
   page?: boolean;
   newVacancy?: boolean;
}

export const InfoJobs = ({ page, newVacancy }: InfoJobsProps) => {
   return (
      <S.ResultInfoJobsDiv>
         <S.Container>
            <S.ContainerTitle>
               <div>{newVacancy ? <NewCard /> : null}</div>
               <div>
                  <S.H1InfoJobs>Desenvolvedor de Sistemas Pleno</S.H1InfoJobs>
                  <S.SpanInfoJobs page={page}>Empresa: IZap Softworks</S.SpanInfoJobs>
               </div>
            </S.ContainerTitle>
            <div>
               <S.BoldText>
                  InfoJobs<S.StyledText> • 04 ago</S.StyledText>
               </S.BoldText>
            </div>
         </S.Container>
         <S.CardResultInfoJobs>
            <RecentSearchButton title={"PHP"} />
            <RecentSearchButton title={"Python"} />
            <RecentSearchButton title={"React"} />
         </S.CardResultInfoJobs>
         <S.ContainerFooter>
            <S.Container>
               <S.StyledText page={page}>
                  {" "}
                  <img src={Cifrao} alt="cifrão" /> Faixa Salarial: <S.BoldText>R$ 4.000,00</S.BoldText>
               </S.StyledText>
               <S.StyledText page={page}>
                  {" "}
                  <img src={Local} alt="Localização" /> Localização: <S.BoldText>Belo Horizonte</S.BoldText>
               </S.StyledText>
               <S.StyledText page={page}>
                  {" "}
                  <img src={Computer} alt="Tipo de vaga" /> Tipo de vaga: <S.BoldText>Home office</S.BoldText>
               </S.StyledText>
            </S.Container>
            <S.Paragraph>
               Oferecemos um ambiente em que todos são protagonistas e agentes de transformação. Temos um excelente clima organizacional com pessoas engajadas em entregar os melhores resultados, assim
               como grandes oportunidades...
            </S.Paragraph>
         </S.ContainerFooter>
      </S.ResultInfoJobsDiv>
   );
};
