import { ROLES } from '../models/Role.js'
import User from '../models/User.js'

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username })
  if (user) return res.status(400).json({ message: 'The user already exist' })
  const email = await User.findOne({ email: req.body.email })
  if (email) return res.status(400).json({ message: 'The email already exist' })
  next()
}

export const checkrolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.lenght; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).json({
          message: `Role ${req.body.roles[i]} does not exist`,
        })
      }
    }
  }
  next()
}
