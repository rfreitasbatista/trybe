import React from 'react';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { cadastrar } from '../../actions';

class Cadastro extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      name:'',
      age:'',
      emailInitial:'',
      redirect: false,
    }
    this.cad = this.cad.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value } = event.target
    this.setState({
      [name]:value
    })
  }

  cad(e) {
    e.preventDefault();
    const client = {
      nome: this.state.name,
      idade: this.state.age,
      email: this.state.emailInitial
    }
    console.log(client)
    this.props.signin(client);
    this.setState({
      redirect:true,
    })
  }

  render(){
    const { name, age, emailInitial, redirect} = this.state

    {if(!this.props.logged) return <p>Login não efetuado</p>}

    {if(redirect) return <Redirect to='/clientes'/>}

    return (
      <div>
        <input name='name' type='text' value={name} onChange={this.handleChange}/>
        <input name='age' type='number' value={age} onChange={this.handleChange}/>
        <input name='emailInitial' type='email' value={emailInitial} onChange={this.handleChange}/>
        <button type='button' onClick={this.cad}>Cadastrar</button>
      </div>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  signin: (e) => dispatch(cadastrar(e))
});

const mapStateToProps = (state) => ({
  logged: state.reducer.isLogged
});

export default connect (mapStateToProps, mapDispatchToProps)(Cadastro)