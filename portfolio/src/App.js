import Projects from "./component/Projects";
// import Introduction from "./component/Introduction";
// import NavBar from "./component/NavBar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
