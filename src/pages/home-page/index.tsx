import * as S from "./style";
import ManWithLaptop from "../../assets/images/man-with-laptop.png";
import Title from "../../components/title";
import Input from "../../components/input";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import OrangeButton from "../../components/buttons/orange-button";

const HomePage = () => {
   return (
      <>
         <S.PurpleBackgroundDiv>
            <S.ContentDiv>
               <Title color="#f1f1f1" fontWeight="400" fontSize="18px">
                  MAIS DE 12.000 VAGAS DE TECNOLOGIA,
                  <br />
                  REUNIDAS EM UM SÓ LUGAR
               </Title>
               <div style={{ marginTop: "-15px", marginBottom: "13px" }}>
                  <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                     Encontre a sua
                     <br />
                  </Title>
                  <div style={{ marginTop: "-30px" }}>
                     <Title color="#fbb04d" fontWeight="600" fontSize="48px">
                        vaga de<span style={{ color: "#f1f1f1", marginLeft: "10px" }}> react</span>
                     </Title>
                  </div>
               </div>
            </S.ContentDiv>
            <img src={ManWithLaptop} style={{ right: "40px", top: "115px", position: "absolute" }} />
         </S.PurpleBackgroundDiv>
         <S.WhiteBackgroundDiv>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
               <div
                  style={{
                     width: "86vw",
                     height: "30vh",
                     marginTop: "1em",
                     position: "absolute",
                     backgroundColor: "white",
                     borderRadius: "20px",
                     right: "3.5em",
                     boxShadow: "0px 10px 5px rgba(255, 255, 255, 0.822)",
                  }}
               >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                     <Input label="O quê você procura?" id="search" placeholder="Cargo, tecnologia ou palavra-chave" icon={<PiMagnifyingGlassBold />} iconColor="gray" size="25px" />
                     <Input label="Onde?" id="city" placeholder="Localização" icon={<GrLocation />} iconColor="gray" size="25px" />
                     <div style={{ marginTop: "28px" }}>
                        <OrangeButton title="Buscar vagas" link="/buscar-vagas" width="small" />
                     </div>
                  </div>
               </div>
            </div>
         </S.WhiteBackgroundDiv>
      </>
   );
};

export default HomePage;
