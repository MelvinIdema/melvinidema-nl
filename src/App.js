import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/Button";
import React from "react";

function App() {
  return (
      <div className="wrapper">
         <header>
             <h1>Ik ben Melvin Idema, ontwerper met een <span className="highlighted">groot passie</span> voor programmeren; vette ontwerpen omzetten in <span className="highlighted">optimale code.</span></h1>
             <p>Ik heb een gezonde obsessie voor nieuwe technologieën, <a href="#">het ontdekken van hun sterktes</a>, en het toepassen ervan op nieuwe projecten.</p>
             <Button label="Leer van mij" type="default" size="large"/> <Button label="Bekijk werk" type="secondary" size="large"/>
         </header>
      </div>
  );
}

export default App;
