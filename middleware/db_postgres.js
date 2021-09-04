const { body } = require('express-validator');
const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'eventos',
    port: '5433'
})

class Metodos {
    constructor() {}

    //------------------------------- Peticiones de Tipo empleados --------------------------------
    getTipos_empleado = async (req, res) => {
        const response = await pool.query('select * from eventos.tipos_empleado');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postTipos_empleado = async(req, res) => {
        const { nombre } = req.body;
        const response = await pool.query('insert into eventos.tipos_empleado(nombre) values ($1)', [nombre])
        console.log({nombre})
        res.status(201).json({messege:'Tipo de Empleado Registrado', body:{nombre} });
    }

    deleteTipos_empleado = async (req, res) => {
        const {nombre} = req.body;
        await pool.query('delete from eventos.tipos_empleado where nombre= $1', [nombre]);
        console.log({nombre});
        res.status(201).json({messege:"Tipo de Empleado Eliminado", body:{nombre}});
    }

    //-------------------------------- Peticiones de Tipo Contratación ----------------------------
    getTipos_contratacion = async (req, res) => {
        const response = await pool.query('select * from eventos.tipos_contratacion');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postTipos_contratacion = async(req, res) => {
        const { nombre } = req.body;
        const response = await pool.query('insert into eventos.tipos_contratacion(nombre) values ($1)', [nombre])
        console.log({nombre})
        res.status(201).json({messege:'Tipo de Contratación ingresada', body:{nombre} });
    }

    deleteTipos_contratacion = async (req, res) => {
        const {nombre} = req.body;
        await pool.query('delete from eventos.tipos_contratacion where nombre= $1', [nombre]);
        console.log({nombre});
        res.status(201).json({messege:"Tipo de Contratación Eliminada", body:{nombre}});
    }

    //--------------------------------- Peticiones Sedes ------------------------------------------
    getSedes = async (req, res) => {
        const response = await pool.query('select * from eventos.sedes');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postSedes = async(req, res) => {
        const { codigo,nombre,cod_ciudad } = req.body;
        const response = await pool.query('insert into eventos.sedes(codigo,nombre,cod_ciudad) values ($1,$2,$3)', [codigo,nombre,cod_ciudad])
        console.log({codigo,nombre,cod_ciudad})
        res.status(201).json({messege:'Sede ingresada', body:{codigo,nombre,cod_ciudad} });
    }

    deleteSedes = async (req, res) => {
        const {codigo} = req.body;
        await pool.query('delete from eventos.sedes where codigo= $1', [codigo]);
        console.log({codigo});
        res.status(201).json({messege:"Sede Eliminada", body:{codigo}});
    }

    putSedes = async(req, res) => {
        const codigo = req.body.codigo;
        console.log("codigo", codigo);
        const { nombre,cod_ciudad } = req.body;
        const response = await pool.query('update eventos.sedes set nombre= $1,cod_ciudad=$2 where codigo = $3', [nombre,cod_ciudad,codigo]);
        console.log({nombre,cod_ciudad});
        res.status(201).json({messege:'Sede Actualizada', body:{codigo,nombre,cod_ciudad}});
    }

    //--------------------------------- Peticiones Programas --------------------------------------
    getProgramas = async (req, res) => {
        const response = await pool.query('select * from eventos.programas');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postProgramas = async(req, res) => {
        const { codigo,nombre,codigo_area } = req.body;
        const response = await pool.query('insert into eventos.programas(codigo,nombre,codigo_area) values ($1,$2,$3)', [codigo,nombre,codigo_area])
        console.log({codigo,nombre,codigo_area})
        res.status(201).json({messege:'Programa ingresado', body:{codigo,nombre,codigo_area} });
    }

    deleteProgramas = async (req, res) => {
        const {codigo} = req.body;
        await pool.query('delete from eventos.programas where codigo= $1', [codigo]);
        console.log({codigo});
        res.status(201).json({messege:"Programa Eliminado", body:{codigo}});
    }

    putProgramas = async(req, res) => {
        const codigo = req.body.codigo;
        console.log("codigo", codigo);
        const { nombre,codigo_area } = req.body;
        const response = await pool.query('update eventos.programas set nombre= $1,codigo_area=$2 where codigo = $3', [nombre,codigo_area,codigo]);
        console.log({nombre,codigo_area});
        res.status(201).json({messege:'Programa Actualizado', body:{codigo,nombre,codigo_area}});
    }

    //---------------------------------- Peticiones Paises ----------------------------------------
    getPaises = async (req, res) => {
        const response = await pool.query('select * from eventos.paises');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postPaises = async(req, res) => {
        const { codigo,nombre } = req.body;
        const response = await pool.query('insert into eventos.paises(codigo,nombre) values ($1,$2)', [codigo,nombre])
        console.log({codigo,nombre})
        res.status(201).json({messege:'Pais ingresado', body:{codigo,nombre} });
    }

    deletePaises = async (req, res) => {
        const {codigo} = req.body;
        await pool.query('delete from eventos.paises where codigo= $1', [codigo]);
        console.log({codigo});
        res.status(201).json({messege:"Pais Eliminado", body:{codigo}});
    }

    putPaises = async(req, res) => {
        const codigo = req.body.codigo;
        console.log("codigo", codigo);
        const { nombre } = req.body;
        const response = await pool.query('update eventos.paises set nombre= $1 where codigo = $2', [nombre,codigo]);
        console.log({nombre});
        res.status(201).json({messege:'Pais Actualizada', body:{codigo,nombre}});
    }

    //---------------------------------- Peticiones Facultades ------------------------------------
    getFacultades = async (req, res) => {
        const response = await pool.query('select * from eventos.facultades');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postFacultades = async(req, res) => {
        const { codigo,nombre,ubicacion,nro_telefono,id_decano } = req.body;
        const response = await pool.query('insert into eventos.facultades(codigo,nombre,ubicacion,nro_telefono,id_decano) values ($1,$2,$3,$4,$5)', [codigo,nombre,ubicacion,nro_telefono,id_decano])
        console.log({codigo,nombre,ubicacion,nro_telefono,id_decano})
        res.status(201).json({messege:'Facultad ingresada', body:{codigo,nombre,ubicacion,nro_telefono,id_decano} });
    }

    deleteFacultades = async (req, res) => {
        const {codigo} = req.body;
        await pool.query('delete from eventos.facultades where codigo= $1', [codigo]);
        console.log({codigo});
        res.status(201).json({messege:"Facultad Eliminada", body:{codigo}});
    }

    putFacultades = async(req, res) => {
        const codigo = req.body.codigo;
        console.log("codigo", codigo);
        const { nombre,ubicacion,nro_telefono,id_decano } = req.body;
        const response = await pool.query('update eventos.facultades set nombre= $1,ubicacion=$2,nro_telefono=$3,id_decano=$4 where codigo = $5', [nombre,ubicacion,nro_telefono,id_decano,codigo]);
        console.log({nombre,ubicacion,nro_telefono,id_decano});
        res.status(201).json({messege:'Facultad Actualizada', body:{codigo,nombre,ubicacion,nro_telefono,id_decano}});
    }

    //---------------------------------- Peticiones Departamentos ---------------------------------
    getDepartamentos = async (req, res) => {
        const response = await pool.query('select * from eventos.departamentos');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postDepartamentos = async(req, res) => {
        const { codigo,nombre,cod_pais } = req.body;
        const response = await pool.query('insert into eventos.departamentos (codigo,nombre,cod_pais) values ($1,$2,$3)', [codigo,nombre,cod_pais])
        console.log({codigo,nombre,cod_pais})
        res.status(201).json({messege:'Departamento ingresado', body:{codigo,nombre,cod_pais} });
    }

    deleteDepartamentos = async (req, res) => {
        const {codigo} = req.body;
        await pool.query('delete from eventos.departamentos where codigo= $1', [codigo]);
        console.log({codigo});
        res.status(201).json({messege:"Departamento eliminado", body:{codigo}});
    }

    putDepartamentos = async(req, res) => {
        const codigo = req.body.codigo;
        console.log("codigo", codigo);
        const { nombre,cod_pais } = req.body;
        const response = await pool.query('update eventos.departamentos set nombre= $1,cod_pais=$2 where codigo = $3', [nombre,cod_pais,codigo]);
        console.log({codigo,nombre,cod_pais});
        res.status(201).json({messege:'Ciudad Actualizada', body:{codigo,nombre,cod_pais}});
    }

    //-------------------------------------- Peticiones Areas ----------------------------------
    getAreas = async (req, res) => {
        const response = await pool.query('select * from eventos.areas');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postAreas = async(req, res) => {
        const { codigo,nombre,codigo_facultad,id_coordinador } = req.body;
        const response = await pool.query('insert into eventos.areas (codigo,nombre,codigo_facultad,id_coordinador) values ($1,$2,$3,$4)', [codigo,nombre,codigo_facultad,id_coordinador])
        console.log({codigo,nombre,codigo_facultad,id_coordinador})
        res.status(201).json({messege:'Area ingresada', body:{codigo,nombre,codigo_facultad,id_coordinador} });
    }

    deleteAreas = async (req, res) => {
        const {codigo} = req.body;
        await pool.query('delete from eventos.areas where codigo= $1', [codigo]);
        console.log({codigo});
        res.status(201).json({messege:"Area eliminada", body:{codigo}});
    }

    putAreas = async(req, res) => {
        const codigo = req.body.codigo;
        console.log("codigo", codigo);
        const { nombre,codigo_facultad,id_coordinador } = req.body;
        const response = await pool.query('update eventos.areas set nombre= $1,codigo_facultad=$2,id_coordinador=$3 where codigo = $4', [nombre,codigo_facultad,id_coordinador,codigo])
        console.log({nombre,codigo_facultad,id_coordinador})
        res.status(201).json({messege:'Ciudad Actualizada', body:{nombre,codigo_facultad,id_coordinador} });
    }

    //--------------------------------------- Peticiones Empleados ------------------------------
    getEmpleados = async (req, res) => {
        const response = await pool.query('select * from eventos.empleados');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postEmpleados = async(req, res) => {
        const { identificacion,nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento } = req.body;
        const response = await pool.query('insert into eventos.empleados (identificacion,nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento) values ($1,$2,$3,$4,$5,$6,$7,$8,$9)', [identificacion,nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento])
        console.log({identificacion,nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento})
        res.status(201).json({messege:'Empleado Registrado', body:{identificacion,nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento} });
    }

    deleteEmpleados = async (req, res) => {
        const {identificacion} = req.body;
        await pool.query('delete from eventos.empleados where identificacion= $1', [identificacion]);
        console.log({identificacion});
        res.status(201).json({messege:"Empleado Eliminado", body:{identificacion}});
    }

    putEmpleados = async(req, res) => {
        const identificacion = req.body.identificacion
        console.log("Identificación", identificacion);
        const { nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento } = req.body;
        const response = await pool.query('update eventos.empleados set nombres= $1,apellidos=$2,email=$3,tipo_contratacion=$4,tipo_empleado=$5,cod_facultad=$6,codigo_sede=$7,lugar_nacimiento=$8 where identificacion = $9', [nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento,identificacion])
        console.log({nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento})
        res.status(201).json({messege:'Empleado Actualizado', body:{nombres,apellidos,email,tipo_contratacion,tipo_empleado,cod_facultad,codigo_sede,lugar_nacimiento} });
    }

    //--------------------------------------- Peticiones Ciudades -------------------------------
    getCiudades = async (req, res) => {
        const response = await pool.query('select * from eventos.ciudades');
        console.log(response.rows);
        res.status(201).json({messege:response.rows});
    }

    postCiudades = async(req, res) => {
        const { codigo,nombre,cod_dpto } = req.body;
        const response = await pool.query('insert into eventos.ciudades (codigo,nombre,cod_dpto) values ($1,$2,$3)', [codigo,nombre,cod_dpto])
        console.log({codigo,nombre,cod_dpto})
        res.status(201).json({messege:'Ciudad ingresada', body:{codigo,nombre,cod_dpto} });
    }

    deleteCiudad = async (req, res) => {
        const {codigo} = req.body;
        await pool.query('delete from eventos.ciudades where codigo= $1', [codigo]);
        console.log({codigo});
        res.status(201).json({messege:"Ciudad eliminada", body:{codigo}});
    }

    putCiudad = async(req, res) => {
        const codigo = req.body.codigo
        console.log("codigo", codigo);
        const { nombre,cod_dpto } = req.body;
        const response = await pool.query('update eventos.ciudades set nombre= $1,cod_dpto=$2 where codigo = $3', [nombre,cod_dpto,codigo])
        console.log({nombre,cod_dpto})
        res.status(201).json({messege:'Ciudad Actualizada', body:{codigo,nombre,cod_dpto} });
    }
}

module.exports = {Metodos};