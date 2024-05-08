import * as S from "./style";
import ManWithLaptop from "../../assets/images/man-with-laptop.png";
import Title from "../../components/title";

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
                     width: "85vw",
                     height: "30vh",
                     marginTop: "1em",
                     position: "absolute",
                     backgroundColor: "white",
                     borderRadius: "20px",
                     right: "3.5em",
                     boxShadow: "0px 10px 5px rgba(255, 255, 255, 0.822)",
                  }}
               ></div>
            </div>
         </S.WhiteBackgroundDiv>
      </>
   );
};

export default HomePage;
