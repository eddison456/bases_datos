const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const NewComentario= Schema(
    {   
        _idevento:{
            type:String 
        },
        id:{
            type: Number,
            unique: true,
            
        },
        nombreUsuario :{
            type:String 
        },
        comentario:{
            type:String
        },   
    }
)

module.exports=mongoose.model('Comentario',NewComentario);