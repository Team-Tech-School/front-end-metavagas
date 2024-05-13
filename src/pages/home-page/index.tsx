import * as S from "./style";
import ManWithLaptop from "../../assets/images/man-with-laptop.png";
<<<<<<< HEAD
import { Title, InputsAndButton } from "../../components/index";
=======
import { Title, InputsAndButton, VacancyHomePageCard, OrangeButton } from "../../components/index";
>>>>>>> bca0e08efc198a28792d3cfea772144c84b84807

export const HomePage = () => {
   return (
      <>
<<<<<<< HEAD
         <S.PurpleBackgroundDiv>
            <S.ContentDiv>
               <Title color="#f1f1f1" fontWeight="400" fontSize="18px">
                  MAIS DE 12.000 VAGAS DE TECNOLOGIA,
                  <br />
                  REUNIDAS EM UM SÓ LUGAR
               </Title>
               <S.ForMainTitleDiv>
                  <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                     Encontre a sua
=======
         <div style={{ marginBottom: "75px" }}>
            <S.PurpleBackgroundDiv>
               <S.ContentDiv>
                  <Title color="#f1f1f1" fontWeight="400" fontSize="18px">
                     MAIS DE 12.000 VAGAS DE TECNOLOGIA,
>>>>>>> bca0e08efc198a28792d3cfea772144c84b84807
                     <br />
                     REUNIDAS EM UM SÓ LUGAR
                  </Title>
<<<<<<< HEAD
                  <S.ForWhiteTitleDiv>
                     <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                        vaga de <S.StyledSpan> react</S.StyledSpan>
                     </Title>
                  </S.ForWhiteTitleDiv>
               </S.ForMainTitleDiv>
            </S.ContentDiv>
            <S.StyledImg src={ManWithLaptop} />
            <S.WhiteBackground>
               <InputsAndButton />
            </S.WhiteBackground>
         </S.PurpleBackgroundDiv>
=======
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
               <InputsAndButton />
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
         </div>
         <div style={{ backgroundColor: "purple" }}>
            {/* <div>Aqui vai ter a parte de "Vagas por todo Brasil"</div>
            <div>Aqui as vagas</div> */}
         </div>
>>>>>>> bca0e08efc198a28792d3cfea772144c84b84807
      </>
   );
};
