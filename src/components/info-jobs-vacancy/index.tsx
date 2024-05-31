import * as S from "./style";
import { RecentSearchButton } from "../most-recent-search/language-card";
import Cifrao from "../../assets/images/cifrao.png";
import Local from "../../assets/images/local-mini.png";
import Computer from "../../assets/images/computer-line.png";
import { NewCard } from "../index";
import { useAuthContext } from "../../providers";
import { IconContext } from "react-icons";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Vacancy } from "../../@types";

interface InfoJobsProps {
   vacancy: Vacancy;
   page?: boolean;
}

const isNewVacancy = (createAt: string): boolean => {
   const createdAtDate = new Date(createAt);
   const now = new Date();
   const diffInMs = now.getTime() - createdAtDate.getTime();
   const diffInMinutes = diffInMs / (1000 * 60);

   return diffInMinutes < 1440;
};

export const InfoJobs = ({ vacancy, page }: InfoJobsProps) => {
   const { isLoggedIn } = useAuthContext();
   const blurred = !isLoggedIn;
   const navigate = useNavigate();

   const handleClick = () => {
      navigate("/fazer-cadastro");
   };

   const newVacancy = isNewVacancy(vacancy.createAt);

   return (
      <S.ResultInfoJobsDiv newVacancy={newVacancy}>
         <S.ContainerForTitle>
            <S.ContainerTitle>
               <div>{newVacancy && <NewCard />}</div>
               <div>
                  <S.H1InfoJobs>{vacancy.vacancyRole}</S.H1InfoJobs>
                  <S.SpanInfoJobs page={page} blurred={blurred}>
                     Empresa: {vacancy.company.name}
                  </S.SpanInfoJobs>
               </div>
            </S.ContainerTitle>
            <div>
               <S.BoldText>
                  InfoJobs<S.InfoJobsText blurred={blurred}> • {new Date(vacancy.createAt).toLocaleDateString()}</S.InfoJobsText>
               </S.BoldText>
            </div>
         </S.ContainerForTitle>
         <S.CardResultInfoJobs>
            {vacancy.technologies.map((tech) => (
               <RecentSearchButton key={tech.id} title={tech.tecName} />
            ))}
         </S.CardResultInfoJobs>
         <S.ContainerFooter>
            <S.Container>
               <S.StyledText page={page} blurred={blurred}>
                  <img src={Cifrao} alt="cifrão" /> Faixa Salarial: <S.BoldText>R$ {vacancy.wage.toLocaleString("pt-BR")}</S.BoldText>
               </S.StyledText>
               <S.StyledText page={page} blurred={blurred}>
                  <img src={Local} alt="Localização" /> Localização: <S.BoldText>{vacancy.location}</S.BoldText>
               </S.StyledText>
               <S.StyledText page={page} blurred={blurred}>
                  <img src={Computer} alt="Tipo de vaga" /> Tipo de vaga: <S.BoldText>{vacancy.vacancyType}</S.BoldText>
               </S.StyledText>
            </S.Container>
            <S.Paragraph>{vacancy.vacancyDescription}</S.Paragraph>
            {!isLoggedIn && (
               <>
                  <S.StyledLink onClick={handleClick}>
                     Ver mais detalhes
                     <S.IconStyledLink>
                        <IconContext.Provider value={{ color: "#5d5fef", size: "13px" }}>{<FaAngleRight />}</IconContext.Provider>
                     </S.IconStyledLink>
                  </S.StyledLink>
               </>
            )}
         </S.ContainerFooter>
      </S.ResultInfoJobsDiv>
   );
};
