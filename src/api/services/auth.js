import jwt from 'jsonwebtoken';
import bCrypt from 'bcrypt';
import userModel from '../models/user';

export default class AuthService {
  constructor() {

  }

  generateToken(username, password) {

  }

  async signIn(email, username, password) {
    const user = await userModel.findOne({username: username})
    if (user) {
      throw new Error('User Exists')
    }
    
    const createdUser = await userModel.create({
      username,
      password,
      email
    })
    return 1
  }
}