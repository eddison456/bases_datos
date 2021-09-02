
const {validationResult, body} = require("express-validator");
const Evento = require("../model/reuniones")
const comentarios = require("../model/comentarios");
const usuario=require("../model/usuarios");
const asistentes=require("../model/asistentes")

// fuccones de agregar
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


 async  function addComentarios(req,res){
   console.log("entre a function", req.body)

  try{
     const {_idevento, id , nombreUsuario , comentario }=req.body

     debugger
  const model = new comentarios({
   _idevento:_idevento,
     id: id,
     nombreUsuario: nombreUsuario,
     comentario:comentario
  })

  const proComentario = await model.save();

  console.log("Res" , proComentario)

  }catch{
     console.log("error <");
  }
  
}

async  function addusuario(req,res){
   console.log("entre a function", req.body)

  try{
     const {id ,nombreUsuario , correoUsuario,tipoUsuario}=req.body

     debugger
  const model = new usuario({
     id: id,
     nombreUsuario:nombreUsuario,
     correoUsuario:correoUsuario,
     tipoUsuario:tipoUsuario
  })

  const proUsuario= await model.save();

  console.log("Res" , proUsuario)
  res.status(201).json({messege:proUsuario});

  }catch{
     console.log("error <");
  }
  
}

async  function addAsistente(req,res){
   console.log("entre a function", req.body)

  try{
     const {_idevento, id ,correoUsuario}=req.body

     debugger
  const model = new asistentes({
   _idevento:_idevento,
     id: id,
     correoUsuario:correoUsuario
  })

  const proAsistente= await model.save();

  console.log("Res" , proAsistente)
  res.status(201).json({messege:"resultado." ,proAsistente});

  }catch{
     console.log("error <");
     res.status(201).json({messege:"resultado." ,proAsistente});
  }
  
}


 //////////////// eventos

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
         
         const EliminarEventos= await Evento.findByIdAndRemove({_id: req.params._id},function(err){

            if(!err){
               res.status(201).json({messege:"evento eliminado"});
          

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
    //////////////// acoemntario
   exports.getComentarios= async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         
         const arrayEventos= await Evento.find()
         console.log("++"+req.params._idevento)
         const c = arrayEventos.map( async function(arrayEventos) {
            if(req.params._idevento==arrayEventos._id){
               const arrayComentarios= await comentarios.find({"_idevento":req.params._idevento})
           res.status(201).json({messege:"resultado." ,data :{arrayComentarios}});
           console.log(arrayComentarios)           
            }else{
               console.log(arrayEventos._id)
            }
        });




      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;     
       }

   }

   exports.comentario = async  (req,res,next) =>{
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
         const arrayEventos= await Evento.find({cantidad:{$gt:-1}},{_id:1})

         const c = arrayEventos.map(function(arrayEventos) {
            if(req.body._idevento==arrayEventos._id){
               console.log("pase")
               const crearCoemntario=req.body.id; 
               
           addComentarios(req,res)
   
           res.status(201).json({messege:"resultado." ,data :{crearCoemntario}});
               
            }
        });
      
       }catch(e){
          const error = new Error("validation failsssss");
          error.statusCode =500;
          error.data=errors.array();
          throw error;
         }
       
      };

      exports.DeleteComentarios = async (req,res,next)=>{
         const  errors=validationResult(req);
   
         if(!errors.isEmpty()){
            error.statusCode=422;
            error.data=errors.array();
            throw error;
         }
   
         try{
            
            const EliminarComentarios= await comentarios.findByIdAndRemove({_id: req.params._id},function(err){
   
               if(!err){
                  res.status(201).json({messege:"comentario eliminado"});
                  console.log(EliminarComentarios)
   
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
   
      exports.Putcomentarios = async (req,res,next)=>{
         const  errors=validationResult(req);
   
         if(!errors.isEmpty()){
            error.statusCode=422;
            error.data=errors.array();
            throw error;
         }
   
         try{
   
            const actualizar=req.body;
            
            const Actaulizarcomentarios= await comentarios.findByIdAndUpdate(req.body._id,actualizar,function(err){
   
               if(!err){
                  res.status(201).json({messege:"comentario actualizado"});
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

/////////////  usuario   


exports.getusuario= async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      
      const arrayUsuarios= await Evento.find()
      
        res.status(201).json({messege:"resultado." ,data :{arrayUsuarios}});
        console.log(arrayUsuarios)           


   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;     
    }

}

exports.usuario = async  (req,res,next) =>{
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
     
            
        addusuario(req,res)

        
   
    }catch(e){
       const error = new Error("validation failsssss");
       error.statusCode =500;
       error.data=errors.array();
       throw error;
      }
    
   };

   exports.DeleteUsuarios = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         
         const EliminarUsuarios= await usuario.findByIdAndRemove({_id: req.params._id},function(err){

            if(!err){
               res.status(201).json({messege:"usuario eliminado"});
             

            }else{
               console.log(_id)
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

   exports.PutUsuarios = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{

         const actualizar=req.body;
         
         const ActaulizarUsuarios= await usuario.findByIdAndUpdate(req.body._id,actualizar,function(err){

            if(!err){
               res.status(201).json({messege:"usuario actualizado"});
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

   //////////////// asistentes

  /* exports.getComentarios= async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         
         const arrayEventos= await Evento.find()
         console.log("++"+req.params._idevento)
         const c = arrayEventos.map( async function(arrayEventos) {
            if(req.params._idevento==arrayEventos._id){
               const arrayComentarios= await comentarios.find({"_idevento":req.params._idevento})
           res.status(201).json({messege:"resultado." ,data :{arrayComentarios}});
           console.log(arrayComentarios)           
            }else{
               console.log(arrayEventos._id)
            }
        });




      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;     
       }

   }
    */
   exports.asistente = async  (req,res,next) =>{
      const errors = validationResult(req);
      console.log("entre")
      if(!errors.isEmpty()){
          console.log("entre a lerro 1"+ errors)
          const error = new Error("validation");
          error.statusCode = 422;
          error.data=errors.array();
          throw error;
              }
        try{
         const arrayEventos= await Evento.find()
         const arrayusuarios= await usuario.find()

         const c = arrayEventos.map(function(arrayEventos) {
            const d = arrayusuarios.map(function(arrayusuarios){
              
               if(req.body._idevento==arrayEventos._id){
                  if(req.body.correoUsuario==arrayusuarios.correoUsuario){
                     console.log("pase")
                  const crearCoemntario=req.body.id;          
              addAsistente(req,res)
                  }
                    
               }})
           });
      
       }catch(e){
          const error = new Error("validation failsssss");
          error.statusCode =500;
          error.data=errors.array();
          throw error;
         }
       
      };

      exports.Deleteasistente = async (req,res,next)=>{
         const  errors=validationResult(req);
   
         if(!errors.isEmpty()){
            error.statusCode=422;
            error.data=errors.array();
            throw error;
         }
   
         try{
            const _id= req.params._id
         
            
            const Eliminarasistente= await comentarios.findByIdAndRemove({_id},function(err){
   
               if(!err){
                  
                  res.status(201).json({messege:"asistencia eliminado"});
                
   
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
