import { LOGIN, CADASTRAR } from '../actions';

const INITIAL_STATE = {
  isLogged: false,
  clientes: [],
};

const reducer = ( state = INITIAL_STATE, action ) => {

  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case CADASTRAR:
      return {
        ...state,
        clientes: [...state.clientes, action.cliente]
      }
    default:
      return state;
  }
}

export default reducer;