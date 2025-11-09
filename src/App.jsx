import { ColorContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./scenes/Global/TopBar";
import SideBarComponent from "./scenes/Global/SideBar";
import Dashboard from "./scenes/dashboard/index";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices/index";
import Contacts from "./scenes/contacts/index";
import Bar from "./scenes/bar/index";
import Form from "./scenes/form/index";
import Line from "./scenes/line/index";
import Pie from "./scenes/pie/index";
import FAQ from "./scenes/faq/index";
import Geography from "./scenes/geo/index";
import Calendar from "./scenes/calender/index";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBarComponent />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/form" element={<Form />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorContext.Provider>
    </>
  );
}

export default App;
