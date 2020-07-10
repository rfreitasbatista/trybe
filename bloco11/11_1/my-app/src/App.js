import React from 'react';
import logo from './logo.svg';
import './App.css';

const tasks = ['arrumar casa', 'comprar comida', 'limpar a sala', 'lavar roupa'];

const task = (value) => {
  return (
    <li>{value}</li>
    );
  }
const lis = tasks.map ( element => task(element));

function App() {
  return (
    <div className="App">
      {lis}
    </div>
  );
}

export default App;
