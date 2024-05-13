import * as S from "./style";
import ManWithLaptop from "../../assets/images/man-with-laptop.png";
import { Title, InputsAndButton, VacancyHomePageCard, OrangeButton, JobsSection } from "../../components";

export const HomePage = () => {
   return (
      <>
         <S.PurpleBackgroundDiv>
            <S.ContentDiv>
               <Title color="#f1f1f1" fontWeight="400" fontSize="18px">
                  MAIS DE 12.000 VAGAS DE TECNOLOGIA,
                  <br />
                  REUNIDAS EM UM SÓ LUGAR
               </Title>
               <S.StyledImg src={ManWithLaptop} />
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
            <S.WhiteBackground>
               <InputsAndButton searchPlaceholder={"Cargo, tecnologia ou palavra-chave"} cityPlaceholder={"Localização"} />
            </S.WhiteBackground>
         </S.PurpleBackgroundDiv>
         <div style={{ margin: "135px 0px 30px 110px" }}>
            <Title color="#1a1033" fontWeight="600" fontSize="32px">
               Vagas mais recentes
            </Title>
         </div>
         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginLeft: "30px" }}>
            <VacancyHomePageCard local="Betim - MG" tecnology="Python" title="Desenvolvedor de Sistemas Pleno" />
            <VacancyHomePageCard local="Contagem - MG" tecnology="PHP" title="Desenvolvedor Full-Stack Pleno" />
            <VacancyHomePageCard local="São Paulo - SP" tecnology="JavaScript" title="Desenvolvedor de Sistemas Pleno" />
            <VacancyHomePageCard local="Montes Claros - MG" tecnology="NodeJS" title="Desenvolvedor de Sistemas Pleno" />
            <div style={{ margin: "30px 0px 40px 0px" }}>
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
