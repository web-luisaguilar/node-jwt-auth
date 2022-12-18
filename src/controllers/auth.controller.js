import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import Rol from '../models/Role.js'

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  })

  if (roles) {
    const foundRoles = await Rol.find({ name: { $in: roles } })
    newUser.roles = foundRoles.map((role) => role._id)
  } else {
    const role = await Rol.findOne({ name: 'user' })
    console.log(role)
    newUser.roles = [role._id]
  }
  const userDuplicate = await User.find({ email: newUser.email })

  if (userDuplicate) {
    console.log('Usuario Existente')
    res.json('El usuario Existe')
  } else {
    const savedUser = await newUser.save()

    console.log(savedUser)

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400,
    })

    res.json({ token })
  }
}
export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    'roles'
  )
  if (!userFound) return res.status(400).json({ message: 'user not found' })

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  )

  if (!matchPassword)
    return res.status(401).json({ token: null, message: 'invalid password' })

  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  })

  console.log(userFound)
  console.log('userfound')
  res.json({ token })
}
