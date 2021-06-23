const mongoose = require('mongoose');
require('dotenv').config()
function connect(){
    const connection = mongoose.connect(process.env.MONGOFB_fitness,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    });
    connection.catch(err=>{
        console.log('err' + err);
    })
}
module.exports={connect}

//I can add the connection to the server I dont need to have this !!