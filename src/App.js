import Creama from "./Components/Creama";
import Home from "./Components/Home";
import Layouts from "./Components/Layouts";
import Apps from "./Components/Apps";
import Customization from "./Components/Customization";
import Features from "./Components/Features";
import Document from "./Components/Document";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Creama />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/layouts" element={<Layouts />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/features" element={<Features />} />
        <Route path="/doc" element={<Document />} />
      </Routes>
    </div>
  );
}

export default App;
