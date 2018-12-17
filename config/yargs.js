const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    default: true,
    alias: 'c'
}

const argv = require('yargs')
    .command('crear', 'crea tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza las listas por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra una tarea', {
        descripcion
    })
    .help('h')
    .alias('v', 'version')
    .argv;

module.exports = {
    argv
}