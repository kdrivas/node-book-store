import AuthService from "../services/auth";

const signUp = async (req) => {
  const { email, username, password } = req.body
  const authService = new AuthService();
  const token = await authService.signUp(email, username, password)
  return token
}

const signIn = async (req) => {
  const { username, password } = req.body
  const authService = new AuthService();
  const token = await authService.signIn(username, password)
  return token
}

export {
  signIn,
  signUp,
};