const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const NewAsistentes= Schema(
    {   
        _idevento:{
            type:String 
        },
        id:{
            type: Number,
            unique: true,
            
        },
        correoUsuario:{
            type:String 
        },  
    }
)

module.exports=mongoose.model('asistentes',NewAsistentes);