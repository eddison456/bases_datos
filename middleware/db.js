const mongoose =  require("mongoose");

// mongodb://127.0.0.1:27017/

const db_uri = 'mongodb://127.0.0.1:27017/TrabajoBd'

module.exports = ( )=>{
    
    const connect= () => {

    mongoose.connect(
        db_uri,{
            keepAlive :true,
            useNewUrlParser:true,
            useUnifiedTopology:true 
        },

        (err)=>{
            if(err){
                console.log(err+"error");

                console.log("error mongo");

            }else{
            console.log("conexion correcta mongo")
            }
             
         }
      )

    }

    connect();
}