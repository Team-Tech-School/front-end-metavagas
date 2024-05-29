import { useState, KeyboardEvent, useEffect, useCallback } from "react";
import * as S from "./style";
import tableBrazil from "../../assets/images/table-brazil.png";
import tableReact from "../../assets/images/table-react.png";
import { InputsAndButton, CustomButton, FilterButton, OrangeButton, Checkbox, SalaryRangeCheckbox, NumberVacancies, BlurredImageWith, InfoJobs, SaveSearch } from "../../components/index";
import { useVacanciesContext } from "../../providers/vacancies-provider";
import { useAuthContext } from "../../providers/auth-provider";

export const ShowVacanciesPage = () => {
   const { isLoggedIn } = useAuthContext();

   const [searchPlaceholder, setSearchPlaceholder] = useState("React");
   const [selectedButton, setSelectedButton] = useState("React");

   const updateSearchPlaceholder = (text: string) => {
      setSearchPlaceholder(text);
   };

   const [tecName, setTecName] = useState<string[]>([]);
   const [vacancyType, setVacancyType] = useState<string[]>([]);
   const [level, setLevel] = useState<string[]>([]);
   const [salaryRange, setSalaryRange] = useState<{ min: number; max: number }>({ min: 0, max: 10000 });
   const [selectedWorkRegime, setSelectedWorkRegime] = useState<string[]>([]);
   const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);

   const handleCheckboxTechnologyChange = (optionsSelected: string[]) => {
      setTecName(optionsSelected);
   };
   const handleCheckboxTypeOfVacancyChange = (optionsSelected: string[]) => {
      setVacancyType(optionsSelected);
   };
   const handleCheckboxWorkRegimeChange = (optionsSelected: string[]) => {
      setSelectedWorkRegime(optionsSelected);
   };
   const handleCheckboxCompanySizeChange = (optionsSelected: string[]) => {
      setSelectedCompanySize(optionsSelected);
   };
   const handleCheckboxExperienceLevelChange = (optionsSelected: string[]) => {
      setLevel(optionsSelected);
   };
   const handleSalaryRangeChange = useCallback((range: { min: number; max: number }) => {
      setSalaryRange(range);
   }, []);

   const clearAllFilters = () => {
      setTecName([]);
      setVacancyType([]);
      setSelectedWorkRegime([]);
      setSelectedCompanySize([]);
      setLevel([]);
   };

   const { fetchVacanciesByFilters, fetchAllVacancies, vacancies } = useVacanciesContext();

   const executeSearch = async () => {
      const filters = {
         tecName: tecName.join(","),
         vacancyType: vacancyType.join(","),
         level: level.join(","),
         salaryRange: `${salaryRange.min}-${salaryRange.max}`,
      };
      if (!filters.tecName && !filters.vacancyType && !filters.level && !filters.salaryRange) {
         await fetchAllVacancies();
      } else {
         await fetchVacanciesByFilters(filters);
      }
   };

   const TecName = ["React", "PHP", "Java", "Python", ".Net", "CSS", "HTML", "Ruby"];
   const VacancyType = ["Remoto", "Presencial", "Híbrido"];
   const workRegime = ["CLT", "PJ"];
   const companySize = ["Pequena", "Média", "Grande"];
   const Level = ["Júnior", "Pleno", "Sênior"];

   const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
         executeSearch();
      }
   };

   useEffect(() => {
      fetchAllVacancies();
   }, []);

   useEffect(() => {
      executeSearch();
   }, [tecName, vacancyType, level]);

   return (
      <>
         <div>
            <S.PurpleBackgroundDiv>
               <div style={{ paddingTop: "5%", margin: "0px 0px 5px -45px" }}>
                  <InputsAndButton searchPlaceholder={searchPlaceholder} cityPlaceholder={"Localização"} colorWhiteLabel={true} onKeyDown={handleKeyDown} />
               </div>
               <S.DivButton>
                  <CustomButton title={"Java"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"PHP"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"Python"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"React"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
               </S.DivButton>
               )
               {isLoggedIn && (
                  <S.SaveSearchComponent>
                     <SaveSearch />
                  </S.SaveSearchComponent>
               )}
            </S.PurpleBackgroundDiv>
         </div>

         <S.ContainerBodyPageDIV>
            <div style={{ marginLeft: "20px" }}>
               <NumberVacancies searchPlaceholder={searchPlaceholder} vacanciesFound={vacancies.length} />
            </div>

            <S.ContainerFilterResult>
               <S.FilterDiv>
                  <S.HeadDivisionDiv>
                     <S.FilterTitle>Filtre sua busca</S.FilterTitle>
                     <S.ClearLink href="#" onClick={clearAllFilters}>
                        Limpar
                     </S.ClearLink>
                  </S.HeadDivisionDiv>
                  <div>
                     <div>
                        <Checkbox title={"Tecnologias"} options={TecName} onFilterChange={handleCheckboxTechnologyChange} selectedFilters={tecName} />
                        {!isLoggedIn && <S.StyledLink to="/fazer-cadastro">Ver mais...</S.StyledLink>}
                     </div>
                     <Checkbox title={"Tipo de vaga"} options={VacancyType} onFilterChange={handleCheckboxTypeOfVacancyChange} selectedFilters={vacancyType} />
                     <Checkbox title={"Regime de trabalho"} options={workRegime} onFilterChange={handleCheckboxWorkRegimeChange} selectedFilters={selectedWorkRegime} />
                     <Checkbox title={"Tamanho da empresa"} options={companySize} onFilterChange={handleCheckboxCompanySizeChange} selectedFilters={selectedCompanySize} />
                     <SalaryRangeCheckbox min={0} max={10000} onChange={handleSalaryRangeChange} />
                     <Checkbox title={"Nível de experiência"} options={Level} onFilterChange={handleCheckboxExperienceLevelChange} selectedFilters={level} />
                  </div>
                  <FilterButton onClickExecuteSearch={executeSearch} />
               </S.FilterDiv>

               <S.ResultDiv>
                  {!isLoggedIn && (
                     <S.ButtonContainer>
                        <S.ButtonAboveImages>
                           <OrangeButton title={"Cadastre-se para visualizar"} width="medium" link="/fazer-cadastro" />
                        </S.ButtonAboveImages>
                        <S.ButtonAboveImages>
                           <OrangeButton title={"Cadastre-se para visualizar"} width="medium" link="/fazer-cadastro" />
                        </S.ButtonAboveImages>
                     </S.ButtonContainer>
                  )}
                  <S.GraphicDiv>
                     <BlurredImageWith blurred={!isLoggedIn} src={tableBrazil} />
                     <BlurredImageWith blurred={!isLoggedIn} src={tableReact} />
                  </S.GraphicDiv>
                  <S.ContainerInfoJobs>
                     {vacancies.map((vacancy: any) => (
                        <InfoJobs key={vacancy.id} vacancy={vacancy} page={true} />
                     ))}
                  </S.ContainerInfoJobs>
               </S.ResultDiv>
            </S.ContainerFilterResult>
         </S.ContainerBodyPageDIV>
      </>
   );
};
