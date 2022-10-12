
import { Box } from "@chakra-ui/react";
import "./App.css";
import Fotter from "./components/Fotter";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      
      <AllRoutes/>
      <Box mt={"50px"}>
        <Fotter />
      </Box>
    </div>
  );
}

export default App;
