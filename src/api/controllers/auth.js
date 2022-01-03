import AuthService from "../services/auth";

const signUp = async ({ email, username, password }) => {
  const authService = new AuthService();
  const token = await authService.signUp(email, username, password)
  return token
}

const signIn = async ({ username, password }) => {
  const authService = new AuthService();
  const token = await authService.signIn(username, password)
  return token
}

export {
  signIn,
  signUp,
};