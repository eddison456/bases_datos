const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const NewEvento= Schema(
    {   
        id:{
            type: Number,
            unique: true,
            
        },
        nombreEvento :{
            type:String 
        },
        cantidad :{
            type: Number 
        },

          
    }
)

module.exports=mongoose.model('Evento',NewEvento);

//{{nombreEvento :"bd monbgo", cantidad : 50 , fecha :"15/08/2021", hora: "2:00", representante:" juan de pan "}  