import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/global-style/global-style";
import { theme } from "./assets/theme/theme";
import Router from "./routes/router";

const App = () => {
   return (
      <>
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router />
         </ThemeProvider>
      </>
   );
};

export default App;
