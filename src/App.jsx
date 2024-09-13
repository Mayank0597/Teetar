// import Routes from "./Routes";
import "./App.css";
import RoutesExample from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        {/* <Routes /> */}
        <RoutesExample />
      </BrowserRouter>
  );
}

export default App;
