
const {validationResult} = require("express-validator");


exports.even = (req,res,next) =>{
   const errors = validationResult(req);
   console.log("entre")
   if(!errors.isEmpty()){
       console.log("entre a lerro 1"+ errors)
       const error = new Error("validation fails......");
       error.statusCode = 422;
       error.data=errors.array();
       throw error;
           }
   
    try{
       const valueOne = +req.body.valueOne;
       const valueTwo = +req.body.valueTwo;
    
       console.log("resultado :","resultado : ", valueOne ,valueTwo)
       const resultado = valueOne+valueTwo;
       res.status(201).json({messege:"resultado." ,data :{ resultado }});
       
   
    }catch(e){
       const error = new Error("validation failsssss");
       error.statusCode =500;
       error.data=errors.array();
       throw error;
      }
    
   };

