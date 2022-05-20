
import './App.css';
import './Reset.css'
import Init from './Init/Init';
import Top from './Init/Top/Top';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sessao from './Sessao/Sessao';
import Seats from './Seats/Seats';




function App() {
  return (
  <>

  <BrowserRouter>
      <Top />

      <Routes>
      <Route path= "/" element={<Init/>} />
        <Route path= "/sessao/:sessaoId" element={<Sessao/>} />
        <Route path= "/seats/:seatsId" element={<Seats/>} />
      </Routes>
    
  </BrowserRouter>
  </>
  );
}

export default App;
