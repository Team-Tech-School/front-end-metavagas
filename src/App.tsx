import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/global-style/global-style";
import { theme } from "./assets/theme/theme";

const App = () => {
   return (
      <>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>Aqui eh uma loucura loucura</div>
         </ThemeProvider>
      </>
   );
};

export default App;
