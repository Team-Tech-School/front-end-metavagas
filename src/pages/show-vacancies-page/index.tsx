import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import tableBrazil from "../../assets/images/table-brazil.png";
import tableReact from "../../assets/images/table-react.png";
import {
  InputsAndButton,
  CustomButton,
  FilterButton,
  OrangeButton,
  Checkbox,
  SalaryRangeCheckbox,
  NumberVacancies,
  BlurredImageWith,
  InfoJobs,
  SaveSearch,
} from "../../components/index";
import { InputsAndButton, CustomButton, FilterButton, OrangeButton, Checkbox, SalaryRangeCheckbox, NumberVacancies, BlurredImageWith, InfoJobs, SaveSearch } from "../../components/index";
import { useVacancyFilterContext } from "../../providers/search-vacanci-filter";
import { useAuthContext } from "../../providers/auth-provider";

export const ShowVacanciesPage = () => {
  const { isLoggedIn } = useAuthContext();

  // State para os filtros de busca
  const [searchPlaceholder, setSearchPlaceholder] = useState("React");
  const [selectedButton, setSelectedButton] = useState("React");

  // Função para os filtros de busca
  const updateSearchPlaceholder = (text: string) => {
    setSearchPlaceholder(text);
  };

  // State para os filtros dos Chekboxes
  const [tecName, setTecName] = useState<string[]>([]);
  const [vacancyType, setVacancyType] = useState<string[]>([]);
  const [level, setLevel] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<{ min: number; max: number }>({ min: 0, max: 10000 });
  const [selectedWorkRegime, setSelectedWorkRegime] = useState<string[]>([]);
  const [selectedCompanySize, setSelectedCompanySize] = useState<string[]>([]);

  // Funções para os filtros de chekboxes
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

  // Função para limpar todos os filtros
  const clearAllFilters = () => {
    setTecName([]);
    setVacancyType([]);
    setSelectedWorkRegime([]);
    setSelectedCompanySize([]);
    setLevel([]);
  };

  // Chama o Context Provider que faz a requisição da Api e retorna os dados
  const { fetchVacancies, vacancies } = useVacancyFilterContext();

  // Função para executar a busca de filtros na API
  const executeSearch = async () => {
    const filters = {
      tecName: tecName.join(","),
      vacancyType: vacancyType.join(","),
      level: level.join(","),
      salaryRange: `${salaryRange.min}-${salaryRange.max}`,
    };
    await fetchVacancies(filters);
  };


  // Arrays de options de chekboxes
  const TecName = [
    "React",
    "PHP",
    "Java",
    "Phyton",
    ".Net",
    "CSS",
    "HTML",
    "Ruby",
  ];
  const VacancyType = ["Remoto", "Presencial", "Hibrido"];
  const workRegime = ["CLT", "PJ"];
  const companySize = ["Pequena", "Media", "Grande"];
  const Level = ["Júnior", "Pleno", "Senior"];

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
          {isLoggedIn && (
            <S.SaveSearchComponent>
              <SaveSearch />
            </S.SaveSearchComponent>
          )}
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
                  opstions={TecName}
                  onFilterChange={handleCheckboxTechnologyChange}
                  selectedFilters={tecName}
                />
                {!isLoggedIn && <Link to="/fazer-cadastro">Ver mais...</Link>}
              </div>
              <Checkbox
                title={"Tipo de vaga"}
                opstions={VacancyType}
                onFilterChange={handleCheckboxTypeOfVacancyChange}
                selectedFilters={vacancyType}
              />
              <Checkbox
                title={"Regime de trabalho"}
                opstions={workRegime}
                onFilterChange={handleCheckboxWorkRegimeChange}
                selectedFilters={selectedWorkRegime}
              />
              <Checkbox
                title={"Tamanho da empresa"}
                opstions={companySize}
                onFilterChange={handleCheckboxCompanySizeChange}
                selectedFilters={selectedCompanySize}
              />

              <div>
               <br />
                <S.LabelTitle>Faixa salarial</S.LabelTitle>
                <br />
                <S.SalaryRangeSpan>
                  R$ {salaryRange.min} - R$ {salaryRange.max}
                </S.SalaryRangeSpan>
                <SalaryRangeCheckbox
                  min={0}
                  max={10000}
                  onChange={handleSalaryRangeChange}
                />
              </div>
              <Checkbox
                title={"Nivel de experiencia"}
                opstions={Level}
                onFilterChange={handleCheckboxExperienceLevelChange}
                selectedFilters={level}
              />
            </div>
            <FilterButton onClickExecuteSearch={executeSearch} />
          </S.FilterDiv>

          <S.ResultDiv>
            {!isLoggedIn && (
              <S.ButtonAboveImages>
                <OrangeButton
                  title={"Cadastre-se para visualizar"}
                  link="/fazer-cadastro"
                />
              </S.ButtonAboveImages>
            )}
            {!isLoggedIn && (
              <S.ButtonAboveImages>
                <OrangeButton
                  title={"Cadastre-se para visualizar"}
                  link="/fazer-cadastro"
                />
              </S.ButtonAboveImages>
            )}
            <S.GraphicDiv>
              <BlurredImageWith blurred={!isLoggedIn} src={tableBrazil} />
              <BlurredImageWith blurred={!isLoggedIn} src={tableReact} />
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
}
