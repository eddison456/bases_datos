const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const NewComentario= Schema(
    {   

        id:{
            type: Number,
            unique: true,
            
        },
        nombreUsuario :{
            type:String 
        },
        correoUsuario:{
            type:String
        }, 
        tipoUsuario:{
            type:String
        },  
    }
)

module.exports=mongoose.model('Usuarios',NewComentario);