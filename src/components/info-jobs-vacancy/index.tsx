import * as S from "./style";
import { RecentSearchButton } from "../most-recent-search/language-card";
import Cifrao from "../../assets/images/cifrao.png";
import Local from "../../assets/images/local-mini.png";
import Computer from "../../assets/images/computer-line.png";
import { NewCard } from "../index";
import { useAuthContext } from "../../providers/auth-provider";

interface InfoJobsProps {
   page?: boolean;
   newVacancy?: boolean;
}

export const InfoJobs = ({ page, newVacancy }: InfoJobsProps) => {
   const { isLoggedIn } = useAuthContext();
   const blurred = !isLoggedIn;

   return (
      <S.ResultInfoJobsDiv newVacancy={newVacancy}>
         <S.Container>
            <S.ContainerTitle>
               <div>{newVacancy && <NewCard />}</div>
               <div>
                  <S.H1InfoJobs>Desenvolvedor de Sistemas Pleno</S.H1InfoJobs>
                  <S.SpanInfoJobs page={page} blurred={blurred}>
                     Empresa: IZap Softworks
                  </S.SpanInfoJobs>
               </div>
            </S.ContainerTitle>
            <div>
               <S.BoldText>
                  InfoJobs<S.StyledText blurred={blurred}> • 04 ago</S.StyledText>
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
            <span><img src={Cifrao} alt="cifrão" /><S.StyledText page={page} blurred={blurred}>
                   Faixa Salarial: <S.BoldText>R$ 4.000,00</S.BoldText>
               </S.StyledText></span>
               <span> <img src={Local} alt="Localização" /><S.StyledText page={page} blurred={blurred}>
                  Localização: <S.BoldText>Belo Horizonte</S.BoldText>
               </S.StyledText></span>
               
               <span> <img src={Computer} alt="Tipo de vaga" />  <S.StyledText page={page} blurred={blurred}>
                Tipo de vaga: <S.BoldText>Home office</S.BoldText>
               </S.StyledText></span>
              
            </S.Container>
            <S.Paragraph >
               Oferecemos um ambiente em que todos são protagonistas e agentes de transformação. Temos um excelente clima organizacional com pessoas engajadas em entregar os melhores resultados, assim
               como grandes oportunidades...
            </S.Paragraph>
            <S.MaisDetalhes>
               Ver mais detalhes {">"}
            </S.MaisDetalhes>            
         </S.ContainerFooter>
      </S.ResultInfoJobsDiv>
   );
};
