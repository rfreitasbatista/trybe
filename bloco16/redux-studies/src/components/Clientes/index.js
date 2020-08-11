import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

function Clientes(props) {
  console.log(props.clientela)

  {if(!props.clientela.isLogged) return (
    <div>
      <p>Login não efetuado</p>
    </div>
  )}

  {if(props.clientela.clientes == '') return (
    <div>
      <p>Nenhum cliente cadastrado!</p>
      <Link to="/cadastrar">Cadastrar</Link>
    </div>
  )}

  return (
    <div>
      {props.clientela.clientes.map(cliente => 
      <div>
        <p>{cliente.nome}</p>
        <p>{cliente.idade}</p>
        <p>{cliente.email}</p>
      </div>
        )}
      <Link to="/cadastrar">Cadastrar</Link>
    </div>)
}

const mapStateToProps = (state) => ({
  clientela: state.reducer
});

export default connect(mapStateToProps)(Clientes)