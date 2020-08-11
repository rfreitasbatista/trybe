export const LOGIN = 'LOGIN';

export const login = () => ({
  type: LOGIN,
});

export const CADASTRAR = 'CADASTRAR';

export const cadastrar = (cliente) => ({
  type: CADASTRAR,
  cliente,
});