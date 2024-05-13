import * as S from "./style";
import ManWithLaptop from "../../assets/images/man-with-laptop.png";
import { Title, InputsAndButton, OrangeButton, JobsSection, VacancyHomePageCard } from "../../components";

export const HomePage = () => {
   return (
      <>
         <S.PurpleBackgroundDiv>
            <S.ContentDiv>
               <S.ForMainTitleDiv>
                  <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                     Encontre a sua
                     <br />
                  </Title>
                  <S.ForWhiteTitleDiv>
                     <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                        vaga de <S.StyledSpan> react</S.StyledSpan>
                     </Title>
                  </S.ForWhiteTitleDiv>
               </S.ForMainTitleDiv>
            </S.ContentDiv>
            <S.StyledImg src={ManWithLaptop} />
         </S.PurpleBackgroundDiv>
         <S.WhiteBackgroundToInputs>
            <InputsAndButton searchPlaceholder={""} cityPlaceholder={""} />
         </S.WhiteBackgroundToInputs>
         <S.WhiteBackground>
            <div style={{ margin: "135px 0px 30px 110px" }}>
               <Title color="#1a1033" fontWeight="600" fontSize="32px">
                  Vagas mais recentes
               </Title>
            </div>
         </S.WhiteBackground>
         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginLeft: "30px" }}>
            <VacancyHomePageCard local="Betim - MG" tecnology="Python" title="Desenvolvedor de Sistemas Pleno" />
            <VacancyHomePageCard local="Contagem - MG" tecnology="PHP" title="Desenvolvedor Full-Stack Pleno" />
            <VacancyHomePageCard local="São Paulo - SP" tecnology="JavaScript" title="Desenvolvedor de Sistemas Pleno" />
            <VacancyHomePageCard local="Montes Claros - MG" tecnology="NodeJS" title="Desenvolvedor de Sistemas Pleno" />
            <div style={{ marginTop: "30px" }}>
               <OrangeButton title="Cadastre-se para ver mais vagas" />
            </div>
         </div>
         <div>
            <JobsSection />
         </div>
         <hr style={{ borderColor: "orange", borderStyle: "solid", borderWidth: "1px 0 0", width: "85%", margin: "0 auto", position: "absolute", right: "7%" }} />
      </>
   );
};
