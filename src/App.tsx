import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "./assets/global-style/global-style";
import { theme } from "./assets/theme/theme";
import Router from "./routes/router";

const App = () => {
   return (
      <>
         <ThemeProvider theme={theme}>
            <ToastContainer />
            <GlobalStyles />
            <Router />
         </ThemeProvider>
      </>
   );
};

export default App;
