
const {validationResult, body} = require("express-validator");
const Evento = require("../model/reuniones")

 async  function addevento(req,res){
    console.log("entre a function", req.body)

   try{
      const {id ,nombreEvento , cantidad }=req.body

      debugger
   const model = new Evento({
      id: id,
      nombreEvento: nombreEvento,
      cantidad:cantidad
   })

   const proEvento = await model.save();

   console.log("Res" , proEvento)

   }catch{
      console.log("error <");
   }
   
 }


 exports.evento =   (req,res,next) =>{
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
      
       const itf = req.body.id;

        addevento(req,res)

       res.status(201).json({messege:"resultado." ,data :{itf}});
       
   
    }catch(e){
       const error = new Error("validation failsssss");
       error.statusCode =500;
       error.data=errors.array();
       throw error;
      }
    
   };


   exports.getEvento = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         
         const arrayEventos= await Evento.find()

         res.status(201).json({messege:arrayEventos});
         console.log(arrayEventos)

        

      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;     
       }

   }

   exports.DeleteEvento = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         
         const EliminarEventos= await Evento.findByIdAndRemove({_id: req.body._id},function(err){

            if(!err){
               res.status(201).json({messege:"evento eliminado"});
               console.log(EliminarEventos)

            }else{
               console.log("error"+err)
            }
         })

         
        

      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;     
       }

   }

   exports.PutEvento = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{

         const actualizar=req.body;
         
         const ActaulizarEventos= await Evento.findByIdAndUpdate(req.body._id,actualizar,function(err){

            if(!err){
               res.status(201).json({messege:"evento actualizado"});
               console.log(actualizar)

            }else{
               console.log("error"+err)
            }
         })

         
        

      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;     
       }

   }
