import * as S from "./style";
import ManWithLaptop from "../../assets/images/man-with-laptop.png";
import { Title, InputsAndButton, VacancyHomePageCard, OrangeButton, JobsSection, MostRecentSearch } from "../../components";
import { useVacanciesContext } from "../../providers/vacancies-provider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
   const { mostRecentVacancies, fetchMostRecentVacancies, fetchVacanciesByFilters } = useVacanciesContext();
   const navigate = useNavigate();
   const [searchValue, setSearchValue] = useState("");
   const [cityValue, setCityValue] = useState("");

   const handleSearch = async () => {
      const filter = {
         tecName: searchValue,
         location: cityValue,
      };
      try {
         await fetchVacanciesByFilters(filter);
         navigate("/buscar-vagas");
      } catch (error) {
         console.error("Failed to fetch vacancies by filters:", error);
      }
   };

   useEffect(() => {
      fetchMostRecentVacancies();
   }, []);

   return (
      <>
         <S.PurpleBackgroundDiv>
            <S.ContentDiv>
               <Title color="#f1f1f1" fontWeight="400" fontSize="17px">
                  MAIS DE 12.000 VAGAS DE TECNOLOGIA,
                  <br />
                  REUNIDAS EM UM SÓ LUGAR
               </Title>
               <S.StyledImg src={ManWithLaptop} />
               <S.ForMainTitleDiv>
                  <Title color="#fbb04d" fontWeight="600" fontSize="45px">
                     Encontre a sua
                     <br />
                  </Title>
                  <S.ForWhiteTitleDiv>
                     <Title color="#fbb04d" fontWeight="600" fontSize="45px">
                        vaga de <S.StyledSpan> react</S.StyledSpan>
                     </Title>
                  </S.ForWhiteTitleDiv>
               </S.ForMainTitleDiv>
            </S.ContentDiv>
            <S.WhiteBackgroundToInputs>
               <InputsAndButton
                  searchValue={searchValue}
                  cityValue={cityValue}
                  onSearch={handleSearch}
                  updateSearchTerm={(searchTerm) => setSearchValue(searchTerm)}
                  updateCityTerm={(cityTerm) => setCityValue(cityTerm)}
               />
               <MostRecentSearch />
            </S.WhiteBackgroundToInputs>
         </S.PurpleBackgroundDiv>
         <S.RecentJobsTitleDiv>
            <Title color="#1a1033" fontWeight="600" fontSize="30px">
               Vagas mais recentes
            </Title>
         </S.RecentJobsTitleDiv>
         <S.VacancyCardsContainer>
            {mostRecentVacancies.map((item: any) => (
               <VacancyHomePageCard key={item.id} local={item.location} tecnology={item.technologies.map((tech: any) => tech?.tecName, [])} title={item.vacancyRole} />
            ))}
            <S.OrangeButtonContainer>
               <OrangeButton title="Cadastre-se para mais vagas" width="medium" link="/fazer-cadastro" />
            </S.OrangeButtonContainer>
         </S.VacancyCardsContainer>
         <div>
            <JobsSection />
         </div>
         <S.StyledHr />
      </>
   );
};
