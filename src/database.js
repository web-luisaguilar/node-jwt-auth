import mongoose from 'mongoose'

mongoose.set('strictQuery', true)
await mongoose
  .connect('mongodb://127.0.0.1:27017/companydb', {
    //necesario definir en lugar de localhost la direccion exacta
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Db is Conected'))
  .catch(() => {
    console.error('Error al intentar conectar a la base de datos')
  })
