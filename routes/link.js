const express = require("express");
const { body } = require("express-validator");
const Route = express.Router();
const operationes_contro =require("../controllers/reuniones")

// eventos
Route.post(
    "/evento",
    [  
        body("id")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/) 
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombreEvento")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| ]+$/)   
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cantidad")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/) 
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),

    ],operationes_contro.evento);


    Route.get(
        "/evento",[

        ],operationes_contro.getEvento);

    Route.delete(
        "/evento/:_id",[  
    
            ],operationes_contro.DeleteEvento);
    
    Route.put(
    "/evento",[  
            
     ],operationes_contro.PutEvento); 

  // comentarios

        Route.put(
            "/comentarios",[

                    
             ],operationes_contro.Putcomentarios);  
        
        Route.post(
                "/comentarios",
                [  
                    body("id")
                    .exists()
                    .withMessage("EL VALOR DE ONE ES REQUERIDO")
                    .matches(/[0-9]+$/) 
                    .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                    .trim()
                    .escape(),
                    body("nombreUsuario")
                    .exists()
                    .withMessage("EL VALOR DE ONE ES REQUERIDO")
                    .matches(/[a-z| ]+$/)   
                    .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
                    .trim()
                    .escape(),
                    body("comentario")
                    .exists()
                    .withMessage("EL VALOR DE ONE ES REQUERIDO")
                    .matches(/[a-z]+$/) 
                    .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                    .trim()
                    .escape(),
            
                ],operationes_contro.comentario);
     
        
    Route.delete(
            "/comentarios/:_id",[
    
            ],operationes_contro.DeleteComentarios);

            Route.get(
                "/comentarios/:_idevento",[  
            
                    ],operationes_contro.getComentarios);      
                    
     // usuarios

     Route.put(
        "/usuarios",[

                
         ],operationes_contro.PutUsuarios);  
    
    Route.post(
            "/usuarios",
            [  
                body("id")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .matches(/[0-9]+$/) 
                .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                .trim()
                .escape(),
                body("nombreUsuario")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .matches(/[a-z| ]+$/)   
                .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
                .trim()
                .escape(),
                body("correoUsuario")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .matches(/[a-z|0-9+@+elpoli.edu.co|]+$/) 
                .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                .trim()
                .escape(),
                body("tipoUsuario")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .matches(/[a-z]+$/) 
                .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                .trim()
                .escape(),       
 
            ],operationes_contro.usuario);
    
        Route.delete(
        "/usuarios/:_id",[

        ],operationes_contro.DeleteUsuarios);

        Route.get(
            "/usuarios",[ 
             
                ],operationes_contro.getusuario);        
        
             //asistentes
    
    Route.post(
            "/asistentes",
            [
                body("_idevento")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .matches(/[a-z|0-9]+$/) 
                .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                .trim()
                .escape(),
                body("id")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .matches(/[0-9]+$/)   
                .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
                .trim()
                .escape(),
                body("correoUsuario")
                .exists()
                .withMessage("EL VALOR DE ONE ES REQUERIDO")
                .matches(/[a-z|0-9+@+elpoli.edu.co|]+$/) 
                .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
                .trim()
                .escape()
   
            ],operationes_contro.asistente);
 
    
        Route.delete(
        "/asistentes/:_id",[

        ],operationes_contro.Deleteasistente);

     /*   Route.get(
            "/usuario",[  
        
                ],operationes_contro.getusuario);    */    
                        
    
    module.exports = Route;

    