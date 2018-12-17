//const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv;
const color = require('colors')
const porHacer = require('./porHacer/por_hacer.js');


//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.d);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        let lista = porHacer.listaPorHacer();
        for (let tupla of lista) {
            console.log('=========POR HACER ========='.green);
            console.log(tupla.descripcion);
            console.log('Estado: ', tupla.completado);
            console.log('============================'.green);
        }
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        let flgActualizado = porHacer.actualizar(argv.d, argv.completado);
        console.log(flgActualizado);
        break;
    case 'borrar':
        console.log('Borra una tarea');
        let flgBorrar = porHacer.borrar(argv.d);
        console.log(flgBorrar);
        break;
    default:
        console.log('Comando no es reconocido');
}