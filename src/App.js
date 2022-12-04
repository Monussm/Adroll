import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from "react-router-dom"
import Adroll from "./Components/Adroll";
import Log from "./Components/Log";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Adroll/>}/>
        <Route exact path="/login" element={<Log/>}/>
      </Routes>
    </Router>

    
    
    
    </>
    
    
  );
}

export default App;
