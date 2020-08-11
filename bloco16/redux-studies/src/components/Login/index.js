import React, {useState} from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions'
import { Redirect } from 'react-router-dom';

function Login(props) {
  
  const [redirect, setRedirect] = useState(false);

  function logging(e){
    e.preventDefault();
    props.in();
    setRedirect(true);
  }

  {if(redirect) return <Redirect to='/clientes' />}
  return (
    <div>
      <form>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="button" onClick={logging}>Entrar</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  in: (e) => dispatch(login(e))
})

export default connect (null, mapDispatchToProps)(Login)
