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
                        
    

    //---------------------------------- Peticiones de Tipo Contratación ----------------------------
    Route.get('/TipoContratacion',
    [

    ], operationes_contro.getTipos_contratacion);

    Route.delete('/TipoContratacion',
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |á]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteTipos_contratacion);

    Route.post('/TipoContratacion',
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |á]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ],operationes_contro.postTipos_contratacion);

//-------------------------------------- Peticiones Sedes ---------------------------------------
    Route.get('/Sedes',
    [

    ], operationes_contro.getSedes);

    Route.delete('/Sedes',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteSedes);

    Route.post("/Sedes",
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |á]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_ciudad")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape()
    ],operationes_contro.postSedes);

    Route.put('/Sedes',
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |á]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_ciudad")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape()
    ],operationes_contro.putSedes);

//----------------------------------- Peticiones Programas ------------------------------------
    Route.get('/Programas',
    [

    ], operationes_contro.getProgramas);

    Route.delete('/Programas',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteProgramas);

    Route.post("/Programas",
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |á]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("codigo_area")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape()
    ],operationes_contro.postProgramas);

    Route.put('/Programas',
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |á]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("codigo_area")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape()
    ],operationes_contro.putProgramas);

//------------------------------------ Peticiones Paises --------------------------------------
    Route.get('/Paises',
    [

    ], operationes_contro.getPaises);

    Route.delete('/Paises',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deletePaises);

    Route.post('/Paises',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape()
    ],operationes_contro.postPaises);

    Route.put('/Paises',
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |á| |Á]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape()
    ],operationes_contro.putPaises);
//------------------------------------ Peticiones Facultades ----------------------------------
    Route.get('/Facultades',
    [

    ], operationes_contro.getFacultades);

    Route.delete('/Facultades',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteFacultades);

    Route.post("/Facultades",
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("ubicacion")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |0-9| |-]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nro_telefono")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |0-9| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("id_decano")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |0-9| |A-Z| | ]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.postFacultades);

    Route.put("/Facultades",
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("ubicacion")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |0-9| |-]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nro_telefono")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |0-9| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("id_decano")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |0-9| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.putFacultades);

//------------------------------------- Peticiones Departamentos -------------------------------
    Route.get('/Departamentos',
    [

    ], operationes_contro.getDepartamentos);

    Route.delete('/Departamentos',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteDepartamentos);

    Route.post("/Departamentos",
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á | |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_pais")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.postDepartamentos);

    Route.put("/Departamentos",
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_pais")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.putDepartamentos);

//---------------------------------------- Peticiones Areas ------------------------------------
    Route.get('/Areas',
    [

    ], operationes_contro.getAreas);

    Route.delete('/Areas',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteAreas);

    Route.post('/Areas',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á | |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("codigo_facultad")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("id_coordinador")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.postAreas);

    Route.put('/Areas',
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("codigo_facultad")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("id_coordinador")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.putAreas);

//----------------------------------------- Peticiones Empleados -------------------------------

    Route.get('/Empleados',
    [

    ], operationes_contro.getEmpleados);

    Route.post('/Empleados',
    [
        body("identificacion")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |0-9]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombres")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("apellidos")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("email")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |@| |.]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("tipo_contratacion")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("tipo_empleado")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_facultad")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("codigo_sede")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("lugar_nacimiento")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.postEmpleados);

    Route.delete('/Empleados',
    [
        body("identificacion")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteEmpleados);

    Route.put('/Empleados',
    [
        body("nombres")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("apellidos")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("email")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |A-Z| |@| |.]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("tipo_contratacion")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("tipo_empleado")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á| |A-Z]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_facultad")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("codigo_sede")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("lugar_nacimiento")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.putEmpleados);

//----------------------------------------- Peticiones Ciudades -------------------------------
    Route.get('/Ciudades',
    [

    ], operationes_contro.getCiudades);

    Route.delete('/Ciudades',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape()
    ], operationes_contro.deleteCiudad);

    Route.post('/Ciudades',
    [
        body("codigo")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_dpto")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),

    ],operationes_contro.postCiudades);

    Route.put('/Ciudades',
    [
        body("nombre")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[a-z| |á]+$/)
        .withMessage("EL VALOR DE ONE DEBE SER NUMERICO")
        .trim()
        .escape(),
        body("cod_dpto")
        .exists()
        .withMessage("EL VALOR DE ONE ES REQUERIDO")
        .matches(/[0-9]+$/)
        .withMessage("EL VALOR DE tTWO DEBE SER NUMERICO")
        .trim()
        .escape(),
    ],operationes_contro.putCiudad);
//---------------------------------------------------------------------------------------


    module.exports = Route;

    