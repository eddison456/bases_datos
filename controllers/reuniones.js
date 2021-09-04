
const {validationResult, body} = require("express-validator");
const Evento = require("../model/reuniones")
const comentarios = require("../model/comentarios");
const usuario=require("../model/usuarios");
const asistentes=require("../model/asistentes")
const { Metodos } = require('../middleware/db_postgres');
// actualizar evento despues o antes de asistente
async function actualizarevento(_id,nombreEvento,cantidad){
 
   console.log("entre a funcion bujajaj " + _id,nombreEvento,cantidad)
   const ActualizarEventos= await Evento.findByIdAndUpdate(_id,{_id,nombreEvento,cantidad},function(err){
   if(!err){
      console.log("entre x1 "+ _id)
     
   

   }else{
      console.log("error"+err)
   }
})     
}

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
         
         const EliminarEventos= await Evento.findByIdAndRemove({_id: req.body._id},function(err){

            if(!err){
               res.status(201).json({messege:"evento eliminado"});
               //console.log(EliminarEventos)

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
         
         const ActualizarEventos= await Evento.findByIdAndUpdate(req.body._id,actualizar,function(err){

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
      console.log("entre", req.body)
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
                  //console.log(EliminarComentarios)
   
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
            
            const Actualizarcomentarios= await comentarios.findByIdAndUpdate(req.body._id,actualizar,function(err){
   
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
         
         const ActualizarUsuarios= await usuario.findByIdAndUpdate(req.body._id,actualizar,function(err){

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
         const arrayEventos= await Evento.find({"_id":req.body._idevento});  
         const arrayusuarios= await usuario.find()

         console.log("los datos de evento son : "+arrayEventos)

         const c = arrayEventos.map(function(arrayEventos) {
            const d = arrayusuarios.map(function(arrayusuarios){
              
              
               if(req.body._idevento==arrayEventos._id){
                  if(req.body.correoUsuario==arrayusuarios.correoUsuario){
                     console.log("pase")
                  const crearCoemntario=req.body.id; 
                  const actualizar=arrayEventos.cantidad;
                 console.log(" cantida fase 1: "+actualizar )
                  console.log(typeof(actualizar));
                  const cantidad=actualizar-1;
                  console.log(" cantida fase 2: "+cantidad)
                  if(cantidad>0){
                    
                  actualizarevento(arrayEventos._id,arrayEventos.nombreEvento,cantidad)
                  addAsistente(req,res)
                  }else{
                     res.status(201).json({messege:"no hay cupos en el evento"});
   
                  }
                    
               }}})
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

   //---------------------------------- Peticiones de Tipo Empleado -----------------------------
exports.getTipos_empleado = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getTipos_empleado(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postTipos_empleado = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postTipos_empleado(req,res);

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deleteTipos_empleado = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deleteTipos_empleado(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

//----------------------------------- Peticiones de Tipo Contratación ------------------------
exports.getTipos_contratacion = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getTipos_contratacion(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postTipos_contratacion = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postTipos_contratacion(req,res);

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deleteTipos_contratacion = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deleteTipos_contratacion(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

//------------------------------------ Peticiones Sedes ---------------------------------------
exports.getSedes = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getSedes(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postSedes = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postSedes(req,res);

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deleteSedes = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deleteSedes(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.putSedes = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.putSedes(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }

};

//------------------------------------- Peticiones Programas ----------------------------------
exports.getProgramas = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getProgramas(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postProgramas = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postProgramas(req,res);

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deleteProgramas = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deleteProgramas(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.putProgramas = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.putProgramas(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }

};

//-------------------------------------- Peticiones Paises ------------------------------------
exports.getPaises = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getPaises(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postPaises = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postPaises(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deletePaises = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deletePaises(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.putPaises = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.putPaises(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }

};

//-------------------------------------- Peticiones Facultades --------------------------------
exports.getFacultades = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getFacultades(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postFacultades = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postFacultades(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deleteFacultades = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deleteFacultades(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.putFacultades = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.putFacultades(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }

};
//-------------------------------------- Peticiones Departamentos -----------------------------
exports.getDepartamentos = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getDepartamentos(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postDepartamentos = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postDepartamentos(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deleteDepartamentos = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deleteDepartamentos(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.putDepartamentos = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.putDepartamentos(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }

};

//----------------------------------------- Peticiones Areas ----------------------------------

exports.getAreas = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      await metodos.getAreas(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.postAreas = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.postAreas(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }
};

exports.deleteAreas = async (req,res,next)=>{
   const  errors=validationResult(req);

   if(!errors.isEmpty()){
      error.statusCode=422;
      error.data=errors.array();
      throw error;
   }

   try{
      const metodos = new Metodos();
      metodos.deleteAreas(req, res)

   }catch(e){
      const error= new Error("fail");
      error.statusCode=500;
      error.data=errors.array()
      throw error;
   }
};

exports.putAreas = (req,res,next) =>{
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
      const metodos = new Metodos();
      metodos.putAreas(req,res)

   }catch(e){
      const error = new Error("validation failsssss");
      error.statusCode =500;
      error.data=errors.array();
      throw error;
   }

};

//----------------------------------------- Peticiones Empleados ------------------------------
   exports.getEmpleados = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         const metodos = new Metodos();
         await metodos.getEmpleados(req, res)

      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;
      }
   };

   exports.postEmpleados = (req,res,next) =>{
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
         const metodos = new Metodos();
         metodos.postEmpleados(req,res)

      }catch(e){
         const error = new Error("validation failsssss");
         error.statusCode =500;
         error.data=errors.array();
         throw error;
      }
   };

   exports.deleteEmpleados = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         const metodos = new Metodos();
         metodos.deleteEmpleados(req, res)

      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;
      }
   };

   exports.putEmpleados = (req,res,next) =>{
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
         const metodos = new Metodos();
         metodos.putEmpleados(req,res)

      }catch(e){
         const error = new Error("validation failsssss");
         error.statusCode =500;
         error.data=errors.array();
         throw error;
      }

   };

//--------------------------------------- Peticiones Ciudades --------------------------------
   exports.deleteCiudad = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         const metodos = new Metodos();
         metodos.deleteCiudad(req, res)

      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;
      }
   }

   exports.putCiudad = (req,res,next) =>{
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
         const metodos = new Metodos();
         metodos.putCiudad(req,res)

      }catch(e){
         const error = new Error("validation failsssss");
         error.statusCode =500;
         error.data=errors.array();
         throw error;
      }
   };

   exports.postCiudades = (req,res,next) =>{
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
         const metodos = new Metodos();
         metodos.postCiudades(req,res)

      }catch(e){
         const error = new Error("validation failsssss");
         error.statusCode =500;
         error.data=errors.array();
         throw error;
      }
   };

   exports.getCiudades = async (req,res,next)=>{
      const  errors=validationResult(req);

      if(!errors.isEmpty()){
         error.statusCode=422;
         error.data=errors.array();
         throw error;
      }

      try{
         const metodos = new Metodos();
         await metodos.getCiudades(req, res)

      }catch(e){
         const error= new Error("fail");
         error.statusCode=500;
         error.data=errors.array()
         throw error;
      }

   }