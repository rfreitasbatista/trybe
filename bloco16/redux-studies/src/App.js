import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Clientes from './components/Clientes';
import Cadastro from './components/Cadastro';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/clientes">Clientes</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/clientes" component={Clientes} />
          <Route path="/cadastrar" component={Cadastro} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
