// import React
import { useState } from "react";
import { Link } from "react-router-dom";
//import style
import * as S from "./style";
// import components
import { InputsAndButton, CustomButton, OrangeButton } from "../../components/index";
import { Checkbox } from "../../components/checkbox's/chekbox";
import { SalaryRangeCheckbox } from "../../components/checkbox's/checkbox-ranger";
import { NumberVacancies } from "../../components/number-vacancies";


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
 const [seletedTechnologies, setSeletedTechnologies] = useState<string[]>([]);
 const [selectedTypeOfVacancy, setSelectedTypeOfVacancy] = useState<string[]>([]);
 const [selectedWorkRegime, setSelectedWorkRegime] = useState<string[]>([]);
 const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);
 const [selectedExperienceLevel, setSelectedExperienceLevel] = useState<string[]>([]);

   // Funções para os filtros de chekboxes
   const handleCheckboxTechnologyChange = (optionsSelected: string[]) => {
      setSeletedTechnologies(optionsSelected);  
      // Chama a função para fazer a requisição à API    
   }
  const handleCheckboxTypeOfVacancyChange = (optionsSelected: string[]) => {
   setSelectedTypeOfVacancy(optionsSelected);
      // Chama a função para fazer a requisição à API
   }
   const handleCheckboxWorkRegimeChange = (optionsSelected: string[]) => {
      setSelectedWorkRegime(optionsSelected);
      // Chama a função para fazer a requisição à API
   }
   const handleCheckboxCompanySizeChange = (optionsSelected: string[]) => {
      setSelectedCompanySize(optionsSelected);
      // Chama a função para fazer a requisição à API
   }
   const handleCheckboxExperienceLevelChange = (optionsSelected: string[]) => {
      setSelectedExperienceLevel(optionsSelected);
      // Chama a função para fazer a requisição à API
   }

   // Função para limpar todos os filtros
   const clearAllFilters = () => {
      setSeletedTechnologies([]);
      setSelectedTypeOfVacancy([]);
      setSelectedWorkRegime([]);
      setSelectedCompanySize([]);
      setSelectedExperienceLevel([]);
  }

   //Arrays de options de chekboxes
   const technologies = ["React", "PHP", "Java", "Phyton", ".Net", "CSS", "HTML", "Ruby"];
   const typeOfVacancies = ["Remoto", "Presencial", "Hibrido"];
   const workRegime = ["CLT", "PJ"];
   const companySize = ["Pequena", "Media", "Grande"];
   const experienceLevel = ["Júnior", "Pleno", "Senior"];


   return (
      <>
         <div>
            <S.PurpleBackgroundDiv>
               <InputsAndButton searchPlaceholder={searchPlaceholder} cityPlaceholder={"Localização"} colorWhiteLabel={true} />

               <S.DivButton>
               <CustomButton  title={"Java"} selectedButton={selectedButton} setSelectedButton={setSelectedButton} updateSearchPlaceholder={updateSearchPlaceholder} />
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
                  <S.ClearLink href="#" onClick={clearAllFilters}>Limpar</S.ClearLink> 
                  </S.HeadDivisionDiv>
                  <div>                   
                     <div>
                     <Checkbox title={"Tecnologias"} opstions={technologies} onFilterChange={handleCheckboxTechnologyChange } />
                     <Link to="/fazer-cadastro">Ver mais...</Link>
                     </div>
                     <Checkbox title={"Tipo de vaga"} opstions={typeOfVacancies} onFilterChange={handleCheckboxTypeOfVacancyChange } />
                     <Checkbox title={"Regime de trabalho"} opstions={workRegime} onFilterChange={handleCheckboxWorkRegimeChange } />
                     <Checkbox title={"Tamanho da empresa"} opstions={companySize} onFilterChange={handleCheckboxCompanySizeChange } />
                     <SalaryRangeCheckbox />
                     <Checkbox title={"Nivel de experiencia"} opstions={experienceLevel} onFilterChange={handleCheckboxExperienceLevelChange } />
                  </div> 
                   <OrangeButton title={"Filtrar"} />               
               </S.FilterDiv>                                
                            
               <S.ResultDiv>               
               
                  <div>
                     <h1>Tabelas Graficos</h1>
                  </div>
                  <div>
                  <h1>Resultado da Pesquisa</h1>
                  </div>
               </S.ResultDiv>
            </S.ContainerFilterResult>

          </S.ContainerBodyPageDIV> 
         
      </>
   );
};
