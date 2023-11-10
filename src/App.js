import Navbar from "./components/NavBar/navbar";
import Home from "./components/Home/home";
import Research from "./components/Research/research";
import Publications from "./components/Publications/publications";
import Team from "./components/Team/team";
import Facilities from "./components/Facilities/facilities";
import JoinUs from "./components/JoinUs/joinus";
import Footer from "./components/Footer/footer";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>

        <div className="">
        <Navbar/>
        <Routes>
          <Route path="/home" element= {<Home/>}/>
          <Route path="/research" element= { <Research/>}/>
          <Route path="/publications" element= { <Publications/>}/>
          <Route path="/team" element= { <Team/>}/>
          <Route path="/facilities" element= { <Facilities/>}/>
          <Route path="/joinus" element= { <JoinUs/>}/>
        </Routes>
      </div>
      <div className="">
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

