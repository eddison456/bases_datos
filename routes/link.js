const express = require("express");
const { body } = require("express-validator");
const Route = express.Router();
const operationes_contro =require("../controllers/reuniones")


Route.post(
    "/evento",
    [
        
        body("valueOne")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)   
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("valueTwo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/) 
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),

    ],operationes_contro.even);