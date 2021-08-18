const express = require("express");
const { body } = require("express-validator");
const Route = express.Router();
const operationes_contro =require("../controllers/reuniones")


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
        "/evento",[  
    
            ],operationes_contro.DeleteEvento);
    
    Route.put(
    "/evento",[  
            
     ],operationes_contro.PutEvento); 

    module.exports = Route;