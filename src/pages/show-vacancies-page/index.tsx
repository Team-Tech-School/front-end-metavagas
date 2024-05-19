// import React
import { useState } from "react";
import { Link } from "react-router-dom";
//import style
import * as S from "./style";
//import images
import tableBrazil from "../../assets/images/table-brazil.png";
import tableReact from "../../assets/images/table-react.png";

// import components
import {
  InputsAndButton,
  CustomButton,
  FilterButton,
  OrangeButton,
} from "../../components/index";
import { Checkbox } from "../../components/checkbox's/chekbox";
import { SalaryRangeCheckbox } from "../../components/checkbox's/checkbox-ranger";
import { NumberVacancies } from "../../components/number-vacancies";
import { BlurredImageWith } from "../../components/table-search";
import { InfoJobs } from "../../components/info-jobs-vacancy";
import { SaveSearch } from "../../components/save-search";

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
  const [selectedTypeOfVacancy, setSelectedTypeOfVacancy] = useState<string[]>(
    []
  );
  const [selectedWorkRegime, setSelectedWorkRegime] = useState<string[]>([]);
  const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState<
    string[]
  >([]);

  // Funções para os filtros de chekboxes
  const handleCheckboxTechnologyChange = (optionsSelected: string[]) => {
    setSeletedTechnologies(optionsSelected);
    // Chama a função para fazer a requisição à API
  };
  const handleCheckboxTypeOfVacancyChange = (optionsSelected: string[]) => {
    setSelectedTypeOfVacancy(optionsSelected);
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
    setSelectedExperienceLevel(optionsSelected);
    // Chama a função para fazer a requisição à API
  };

  // Função para limpar todos os filtros
  const clearAllFilters = () => {
    setSeletedTechnologies([]);
    setSelectedTypeOfVacancy([]);
    setSelectedWorkRegime([]);
    setSelectedCompanySize([]);
    setSelectedExperienceLevel([]);
  };

  //Arrays de options de chekboxes
  const technologies = [
    "React",
    "PHP",
    "Java",
    "Phyton",
    ".Net",
    "CSS",
    "HTML",
    "Ruby",
  ];
  const typeOfVacancies = ["Remoto", "Presencial", "Hibrido"];
  const workRegime = ["CLT", "PJ"];
  const companySize = ["Pequena", "Media", "Grande"];
  const experienceLevel = ["Júnior", "Pleno", "Senior"];

  // State para armazenar os resultados da API
  const [apiResults, setApiResults] = useState<any[]>([]);

  const executeSearch = async () => {
    const filters = {
      technologies: seletedTechnologies,
      typeOfVacancies: selectedTypeOfVacancy,
      workRegime: selectedWorkRegime,
      companySize: selectedCompanySize,
      experienceLevel: selectedExperienceLevel,
    };
    console.log(filters);

    // Chama a função para fazer a requisição à API
  };

  return (
    <>
      <div>
        <S.PurpleBackgroundDiv>
          <InputsAndButton
            searchPlaceholder={searchPlaceholder}
            cityPlaceholder={"Localização"}
            colorWhiteLabel={true}
          />

          <S.DivButton>
            <CustomButton
              title={"Java"}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              updateSearchPlaceholder={updateSearchPlaceholder}
            />
            <CustomButton
              title={"PHP"}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              updateSearchPlaceholder={updateSearchPlaceholder}
            />
            <CustomButton
              title={"Phyton"}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              updateSearchPlaceholder={updateSearchPlaceholder}
            />
            <CustomButton
              title={"React"}
              selectedButton={selectedButton}
              setSelectedButton={setSelectedButton}
              updateSearchPlaceholder={updateSearchPlaceholder}
            />
          </S.DivButton>

          <S.SaveSearchComponent>
             <SaveSearch/>
          </S.SaveSearchComponent>

        </S.PurpleBackgroundDiv>
      </div>

      <S.ContainerBodyPageDIV>
        <NumberVacancies
          searchPlaceholder={searchPlaceholder}
          vacanciesFound={255}
        />

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
                <Checkbox
                  title={"Tecnologias"}
                  opstions={technologies}
                  onFilterChange={handleCheckboxTechnologyChange}
                />
                <Link to="/fazer-cadastro">Ver mais...</Link>
              </div>
              <Checkbox
                title={"Tipo de vaga"}
                opstions={typeOfVacancies}
                onFilterChange={handleCheckboxTypeOfVacancyChange}
              />
              <Checkbox
                title={"Regime de trabalho"}
                opstions={workRegime}
                onFilterChange={handleCheckboxWorkRegimeChange}
              />
              <Checkbox
                title={"Tamanho da empresa"}
                opstions={companySize}
                onFilterChange={handleCheckboxCompanySizeChange}
              />
              <SalaryRangeCheckbox />
              <Checkbox
                title={"Nivel de experiencia"}
                opstions={experienceLevel}
                onFilterChange={handleCheckboxExperienceLevelChange}
              />
            </div>
            <FilterButton onClickExecuteSearch={executeSearch} />
          </S.FilterDiv>

          <S.ResultDiv>
            <S.ButtonAboveImages>
              <OrangeButton
                title={"Cadastre-se para visualizar"}
                link="/fazer-cadastro"
              />
            </S.ButtonAboveImages>
            <S.ButtonAboveImages>
              <OrangeButton
                title={"Cadastre-se para visualizar"}
                link="/fazer-cadastro"
              />
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
