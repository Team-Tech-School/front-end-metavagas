// import React
import { useState } from "react";
import { Link } from "react-router-dom";
//import style
import * as S from "./style";
// import components
import { InputsAndButton, CustomButton, OrangeButton } from "../../components/index";
import { Checkbox } from "../../components/chekbox";
import { SalaryRangeCheckbox } from "../../components/checkbox-ranger";


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
 const [selectedTipodeVaga, setSelectedTipodeVaga] = useState<string[]>([]);
 const [selectedRegimeDeTrabalho, setSelectedRegimeDeTrabalho] = useState<string[]>([]);
 const [selectedTamanhoDaEmpresa, setSelectedTamanhoDaEmpresa] = useState<string[]>([]);
 const [selectedNivelDeExperiencia, setSelectedNivelDeExperiencia] = useState<string[]>([]);

   // Funções para os filtros de chekboxes
   const handleCheckboxTechnologyChange = (optionsSelected: string[]) => {
      setSeletedTechnologies(optionsSelected);  
      // Chama a função para fazer a requisição à API    
   }
  const handleCheckboxTipoDeVagaChange = (optionsSelected: string[]) => {
      setSelectedTipodeVaga(optionsSelected);
      // Chama a função para fazer a requisição à API
   }
   const handleCheckboxRegimeDeTrabalhoChange = (optionsSelected: string[]) => {
      setSelectedRegimeDeTrabalho(optionsSelected);
      // Chama a função para fazer a requisição à API
   }
   const handleCheckboxTamanhoDaEmpresaChange = (optionsSelected: string[]) => {
      setSelectedTamanhoDaEmpresa(optionsSelected);
      // Chama a função para fazer a requisição à API
   }
   const handleCheckboxNivelDeExperienciaChange = (optionsSelected: string[]) => {
      setSelectedNivelDeExperiencia(optionsSelected);
      // Chama a função para fazer a requisição à API
   }

   //Arrays de options de chekboxes
   const Tecnologias = ["React", "PHP", "Java", "Phyton", ".Net", "CSS", "HTML", "Ruby"];
   const TipoDeVaga = ["Remoto", "Presencial", "Hibrido"];
   const RegimeDeTrabalho = ["CLT", "PJ"];
   const TamanhoDaEmpresa = ["Pequena", "Media", "Grande"];
   const NivelDeExperienci = ["Júnior", "Pleno", "Senior"];


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
            <h1>Vagas em {searchPlaceholder}</h1>
            <p>225 vagas encontradas</p>

            <S.ContainerFilterResult>
               <S.FilterDiv>            
                  
                  <S.HeadDivisionDiv>
                  <S.FilterTitle>Filtre sua busca</S.FilterTitle>    
                  <S.ClearLink>Limpar</S.ClearLink> 
                  </S.HeadDivisionDiv>
                  <div>                   
                     <div>
                     <Checkbox title={"Tecnologias"} opstions={Tecnologias} onFilterChange={handleCheckboxTechnologyChange } />
                     <Link to="/fazer-cadastro">Ver mais...</Link>
                     </div>
                     <Checkbox title={"Tipo de vaga"} opstions={TipoDeVaga} onFilterChange={handleCheckboxTipoDeVagaChange } />
                     <Checkbox title={"Regime de trabalho"} opstions={RegimeDeTrabalho} onFilterChange={handleCheckboxRegimeDeTrabalhoChange } />
                     <Checkbox title={"Tamanho da empresa"} opstions={TamanhoDaEmpresa} onFilterChange={handleCheckboxTamanhoDaEmpresaChange } />
                     <SalaryRangeCheckbox />
                     <Checkbox title={"Nivel de experiencia"} opstions={NivelDeExperienci} onFilterChange={handleCheckboxNivelDeExperienciaChange } />
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
