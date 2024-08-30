const mongoose = require('mongoose');
const app = require('./app');


//connect to dataBase
const dbConnect = `mongodb+srv://seifSalah:RwfGi3O26xhFfStU@cluster0.vc3se.mongodb.net/freelance?retryWrites=true&w=majority&appName=Cluster0`
const connection = mongoose.connect(dbConnect,{
    useNewUrlParser: true,
   
    // useFindAndModify: false,
    // useUnifiedTopology: true,
}).then(x=>console.log('seccessful connection')).catch(err=>console.log(err.message));

//port number
const port = 4123;
const server = app.listen(port,()=>{
    console.log(`welcome on server on port ${port}`)
});
process.on('unhandledRejection', (err) => {
    console.log(err.message, err.name);
    server.close(() => {
      process.exit(1);
    });
  });
  module.exports = app;