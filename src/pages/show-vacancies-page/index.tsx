// import React
import { useState } from "react";
import { Link } from "react-router-dom";
//import style
import * as S from "./style";
//import images
import tableBrazil from "../../assets/images/table-brazil.png";
import tableReact from "../../assets/images/table-react.png";

// import components
import { InputsAndButton, CustomButton, FilterButton, OrangeButton, Checkbox, SalaryRangeCheckbox, NumberVacancies, BlurredImageWith, InfoJobs, SaveSearch } from "../../components/index";
// import context
import { useVacancyFilterContext } from "../../providers/search-vacanci-filter";

export const ShowVacanciesPage = () => {
   // State para os filtros de busca
   const [searchPlaceholder, setSearchPlaceholder] = useState("React");
   const [selectedButton, setSelectedButton] = useState("React");

   // Função para os filtros de busca
   const updateSearchPlaceholder = (text: string) => {
      setSearchPlaceholder(text);
   };
   //-----------------------------Filters Checkboxes-----------------------------
   // State para os filtros dos Chekboxes
   const [tecName, setTecName] = useState<string[]>([]);
   const [vacancyType, setVacancyType] = useState<string[]>([]);
   const [level, setLevel] = useState<string[]>([]);
   //const [minSalary, setMinSalary] = useState<number>(0);
   //const [maxSalary, setMaxSalary] = useState<number>(0);

   //STATE'S DE PESQUISA QUE NÃO FAZEM REQUISIÇÃO A API
   const [selectedWorkRegime, setSelectedWorkRegime] = useState<string[]>([]);
   const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);

   // Funções para os filtros de chekboxes
   const handleCheckboxTechnologyChange = (optionsSelected: string[]) => {
      setTecName(optionsSelected);
      // Chama a função para fazer a requisição à API
   };
   const handleCheckboxTypeOfVacancyChange = (optionsSelected: string[]) => {
      setVacancyType(optionsSelected);
      // Chama a função para fazer a requisição à API
   };
   const handleCheckboxWorkRegimeChange = (optionsSelected: string[]) => {
      setSelectedWorkRegime(optionsSelected);
      // Chama a função para fazer a requisição à API
   };
   const handleCheckboxCompanySizeChange = (optionsSelected: string[]) => {
      setSelectedCompanySize(optionsSelected);
      // Chama a função para fazer a requisição à API
   };
   const handleCheckboxExperienceLevelChange = (optionsSelected: string[]) => {
      setLevel(optionsSelected);
      // Chama a função para fazer a requisição à API
   };

   // Função para limpar todos os filtros
   const clearAllFilters = () => {
      console.log("click")
      setTecName([]);
      setVacancyType([]);
      setSelectedWorkRegime([]);
      setSelectedCompanySize([]);
      setLevel([]);
      
   };
   console.log("click", tecName)

   //Arrays de options de chekboxes
   const TecName = ["React", "PHP", "Java", "Phyton", ".Net", "CSS", "HTML", "Ruby"];
   const VacancyType = ["Remoto", "Presencial", "Hibrido"];
   const workRegime = ["CLT", "PJ"];
   const companySize = ["Pequena", "Media", "Grande"];
   const Level = ["Júnior", "Pleno", "Senior"];

   // Chama o Context Provider que faz a requisição da Api e retorna os dados
   const {fetchVacancies, vacancies, loading, error} = useVacancyFilterContext();
   // Função para executar a busca de filtros na API
   const executeSearch = async () => {
      const filters = {
         tecName: tecName.join(","),
         vacancyType: vacancyType.join(","),
         level: level.join(","),
         //minSalary: number;
         //maxSalary: number;
                 
      };
      console.log("Executing search with filters:", filters); // Log para depuração
      // Chama a função para fazer a requisição à API
      fetchVacancies(filters);
      console.log("REsults:", vacancies)
   };

   return (
      <>
         <div>
            <S.PurpleBackgroundDiv>
               <InputsAndButton searchPlaceholder={searchPlaceholder} cityPlaceholder={"Localização"} colorWhiteLabel={true} />

               <S.DivButton>
                  <CustomButton title={"Java"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"PHP"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"Phyton"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
                  <CustomButton title={"React"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
               </S.DivButton>

            </S.PurpleBackgroundDiv>
         </div>

         <S.ContainerBodyPageDIV>
            <NumberVacancies searchPlaceholder={searchPlaceholder} vacanciesFound={255} />

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
                        <Checkbox title={"Tecnologias"} 
                        opstions={TecName} 
                        onFilterChange={handleCheckboxTechnologyChange} 
                        selectedFilters={tecName} />
                        <Link to="/fazer-cadastro">Ver mais...</Link>
                     </div>

                     <Checkbox title={"Tipo de vaga"} 
                     opstions={VacancyType} 
                     onFilterChange={handleCheckboxTypeOfVacancyChange} 
                     selectedFilters={vacancyType} />

                     <Checkbox title={"Regime de trabalho"} 
                     opstions={workRegime} 
                     onFilterChange={handleCheckboxWorkRegimeChange} 
                     selectedFilters={selectedWorkRegime} />

                     <Checkbox title={"Tamanho da empresa"} 
                     opstions={companySize} 
                     onFilterChange={handleCheckboxCompanySizeChange} 
                     selectedFilters={selectedCompanySize} />

                     <SalaryRangeCheckbox />

                     <Checkbox title={"Nivel de experiencia"} 
                     opstions={Level} 
                     onFilterChange={handleCheckboxExperienceLevelChange}  
                     selectedFilters={level} />
                  </div>
                  <FilterButton onClickExecuteSearch={executeSearch} />
               </S.FilterDiv>

               <S.ResultDiv>
                  <S.ButtonAboveImages>
                     <OrangeButton title={"Cadastre-se para visualizar"} link="/fazer-cadastro" />
                  </S.ButtonAboveImages>
                  <S.ButtonAboveImages>
                     <OrangeButton title={"Cadastre-se para visualizar"} link="/fazer-cadastro" />
                  </S.ButtonAboveImages>

                  <S.GraphicDiv>
                     <BlurredImageWith blurred={true} src={tableBrazil} />
                     <BlurredImageWith blurred={true} src={tableReact} />
                  </S.GraphicDiv>
                  <S.ContainerInfoJobs>
                     <InfoJobs page={true} newVacancy={true} />
                     <InfoJobs page={true} newVacancy={false} />
                  </S.ContainerInfoJobs>
               </S.ResultDiv>
            </S.ContainerFilterResult>
         </S.ContainerBodyPageDIV>
      </>
   );
};
