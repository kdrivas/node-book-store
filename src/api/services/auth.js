import jwt from 'jsonwebtoken';
import bCrypt from 'bcrypt';
import userModel from '../models/user';

export default class AuthService {
  constructor() {

  }

  generateToken(username) {
    const token = jwt.sign({data: username}, 'SUPERCOMPLICATEDKEY', { expiresIn: '24h' })
    return token
  }

  encryptPass(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null)
  }

  checkPass(password, user) {
    return bCrypt.compareSync(password, user.password)
  }

  async signUp(email, username, password) {
    const user = await userModel.findOne({username})
    if (user) {
      throw new Error('User Exists')
    }
    
    const createdUser = await userModel.create({
      username,
      password: this.encryptPass(password),
      email
    })
    const token = this.generateToken(username)
    return token

  }

  async signIn(username, password) {
    const user = await userModel.findOne({username})
    if (user) {
      if (!this.checkPass(password, user))
        throw new Error('Incorrect Password')

      const token = this.generateToken(username)
      return token
    } else {
      throw new Error('User not exist')
    }
  }
}