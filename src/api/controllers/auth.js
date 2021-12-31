import AuthService from "../services/auth";

const signUp = async ({ email, username, password }) => {
  const authService = new AuthService();
  const data = await authService.signIn(email, username, password)
  console.log('hola', data)
  return data
}

const signIn = ({ username, password }) => {

}

export {
  signIn,
  signUp
};