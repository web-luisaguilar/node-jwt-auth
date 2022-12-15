import User from '../models/User.js'

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  })
  const saveUser = await newUser.save()
  console.log(saveUser)
  res.json('signup')
}
export const signIn = async (req, res) => {
  res.json('signin')
}
