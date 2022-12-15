import mongoose from 'mongoose'

mongoose.set('strictQuery', true)
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/companydb', {
    //necesario definir en lugar de localhost la direccion exacta
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Db is Conected')
} catch (err) {
  console.log(err)
}
