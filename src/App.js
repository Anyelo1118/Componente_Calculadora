import './App.css';
import React from 'react';
import { Calculadora } from './componentes/calculadora.js';

function App() {
  return (
    <React.Fragment className="bg-red-500">
      
      <h1 className="bg-cyan-500 text-center text-xl font-bold">Calculadora</h1>
      
      <Calculadora/>
    </React.Fragment>
    
  );
}

export default App;

