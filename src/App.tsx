import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Confirm from "./pages/Confirm";

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="favorites" element={<Favorites/>}/>
          <Route path="confirm" element={<Confirm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
