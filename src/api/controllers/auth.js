import AuthService from "../services/auth";

const signUp = async ({ email, username, password }) => {
  const authService = new AuthService();
  const token = await authService.signIn(email, username, password)
  return token
}

const signIn = ({ username, password }) => {

}

export {
  signIn,
  signUp
};