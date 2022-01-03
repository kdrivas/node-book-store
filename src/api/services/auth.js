import jwt from 'jsonwebtoken';
// import redis from 'redis';
// import JWTR from 'jwt-redis';
import bCrypt from 'bcrypt';
import userModel from '../models/user';

export default class AuthService {
  constructor() {
    // this.redisClient = redis.createClient();
    // this.jwtr = new JWTR(this.redisClient)
  }

  generateToken(username) {
    const token = jwt.sign({data: username}, 'SUPERCOMPLICATEDKEY', { expiresIn: '24h' })
    return token
  }

  blankToken(token) {
    console.log('mi token', token)
    const token2 = jwt.sign({data: token}, " ", { expiresIn: '24h'})
    console.log('token2', token2)
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

  async signOut(token) {
    this.blankToken(token)
    return 1
  }
}