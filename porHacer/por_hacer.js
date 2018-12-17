const fs = require('fs');


let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    };

    cargarDB()
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const listaPorHacer = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
    } else
        return false;

}

const borrar = (descripcion) => {
    cargarDB();
    let tareaBorrada = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    console.log(listadoPorHacer);
    if (tareaBorrada.length == listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = tareaBorrada
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    listaPorHacer,
    actualizar,
    borrar
}