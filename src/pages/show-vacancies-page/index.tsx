import { useState, KeyboardEvent, useEffect } from "react";
import * as S from "./style";
import tableBrazil from "../../assets/images/table-brazil.png";
import tableReact from "../../assets/images/table-react.png";
import { InputsAndButton, CustomButton, FilterButton, OrangeButton, Checkbox, NumberVacancies, BlurredImageWith, InfoJobs, SaveSearch, SalaryRangerSlider } from "../../components/index";
import { useVacanciesContext, useAuthContext } from "../../providers";

export const ShowVacanciesPage = () => {
   const { isLoggedIn } = useAuthContext();
   const { fetchVacanciesByFilters, fetchAllVacancies, vacancies } = useVacanciesContext();

   const [searchValue, setSearchValue] = useState(localStorage.getItem("searchValue") || "");
   const [cityValue, setCityValue] = useState(localStorage.getItem("cityValue") || "");
   const [selectedButton, setSelectedButton] = useState(searchValue);
   const [currentSearchTerm, setCurrentSearchTerm] = useState(searchValue);

   const updateSearchPlaceholder = (text: string) => {
      setSelectedButton(text);
      setCurrentSearchTerm(text);
      setSearchValue(text);
      executeSearch({ tecName: text });
   };

   const [tecName, setTecName] = useState<string[]>([]);
   const [vacancyType, setVacancyType] = useState<string[]>([]);
   const [level, setLevel] = useState<string[]>([]);
   const [selectedWorkRegime, setSelectedWorkRegime] = useState<string[]>([]);
   const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);

   const [minSalary, setMinSalary] = useState(0);
   const [maxSalary, setMaxSalary] = useState(30000);

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

   const handleSalaryChange = (min: number, max: number) => {
      setMinSalary(min);
      setMaxSalary(max);
   };

   const clearAllFilters = async () => {
      console.log("função clearAllFilters foi chamada");
      setTecName([]);
      setVacancyType([]);
      setSelectedWorkRegime([]);
      setSelectedCompanySize([]);
      setLevel([]);
      setSearchValue("");
      setCityValue("");
      setCurrentSearchTerm("Tudo");
      setSelectedButton("");
      setMinSalary(0);
      setMaxSalary(10000);
      localStorage.removeItem("searchValue");
      localStorage.removeItem("cityValue");
      await fetchAllVacancies();
   };

   const executeSearch = async (overrideFilters = {}) => {
      console.log("função executeSearch foi chamada");
      const filters = {
         tecName: tecName.join(", "),
         vacancyType: vacancyType.join(", "),
         level: level.join(", "),
         minSalary: minSalary,
         maxSalary: maxSalary,
         location: cityValue,
         ...overrideFilters,
      };

      const noFiltersApplied = !filters;

      if (noFiltersApplied) {
         await fetchAllVacancies();
      }
      if (searchValue === "" || cityValue === "") {
         await fetchAllVacancies();
      } else {
         await fetchVacanciesByFilters(filters);
      }

      setCurrentSearchTerm(filters.tecName);
   };

   const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
         executeSearch();
      }
   };

   useEffect(() => {
      const fetchInitialVacancies = async () => {
         const filter = {
            tecName: searchValue,
            location: cityValue,
         };

         await fetchVacanciesByFilters(filter);
      };

      fetchInitialVacancies();
   }, []);

   const TecName = ["React", "PHP", "Java", "Python", ".Net", "CSS", "HTML", "Ruby"];
   const VacancyType = ["Remoto", "Presencial", "Híbrido"];
   const workRegime = ["CLT", "PJ"];
   const companySize = ["Pequena", "Média", "Grande"];
   const Level = ["Júnior", "Pleno", "Sênior"];

   return (
      <>
         <div>
            <S.PurpleBackgroundDiv>
               <S.DivForInputsAndButton>
                  <InputsAndButton updateSearchTerm={updateSearchPlaceholder} searchValue={searchValue} cityValue={cityValue} colorWhiteLabel={true} onKeyDown={handleKeyDown} />
               </S.DivForInputsAndButton>
               <S.DivButton>
                  <CustomButton title={"Java"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"PHP"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"Python"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"React"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
               </S.DivButton>
               {isLoggedIn && (
                  <S.SaveSearchComponent>
                     <SaveSearch />
                  </S.SaveSearchComponent>
               )}
            </S.PurpleBackgroundDiv>
         </div>

         <S.ContainerBodyPageDIV>
            <S.DivForNumberVacancies>
               <NumberVacancies searchPlaceholder={currentSearchTerm} vacanciesFound={vacancies.length} />
            </S.DivForNumberVacancies>

            <S.ContainerFilterResult>
               <S.FilterDiv>
                  <S.HeadDivisionDiv>
                     <S.FilterTitle>Filtre sua busca</S.FilterTitle>
                     <S.ClearLink onClick={clearAllFilters}>Limpar</S.ClearLink>
                  </S.HeadDivisionDiv>
                  <div>
                     <div>
                        <Checkbox title={"Tecnologias"} options={TecName} onFilterChange={handleCheckboxTechnologyChange} selectedFilters={tecName} />
                        {!isLoggedIn && <S.StyledLink to="/fazer-cadastro">Ver mais...</S.StyledLink>}
                     </div>
                     <Checkbox title={"Tipo de vaga"} options={VacancyType} onFilterChange={handleCheckboxTypeOfVacancyChange} selectedFilters={vacancyType} />
                     <Checkbox title={"Regime de trabalho"} options={workRegime} onFilterChange={handleCheckboxWorkRegimeChange} selectedFilters={selectedWorkRegime} />
                     <Checkbox title={"Tamanho da empresa"} options={companySize} onFilterChange={handleCheckboxCompanySizeChange} selectedFilters={selectedCompanySize} />
                     <SalaryRangerSlider onSalaryChange={handleSalaryChange} />
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
