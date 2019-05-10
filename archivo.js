const opciones={
    matematicas:{
        default:0,
        alias:'m'
    },
    ingles:{
        default:0,
        alias:'i'
    }, 
    programacion:{
        demand:true,
        alias:'p'
    }
}

const argv = require('yargs')
                    .command('promedio','Calcular el promedio',opciones)
                    .argv

let promedio = (nota1,nota2,nota3) =>{
    let resultado = (nota1+nota2+nota3)/3;
    return resultado;
}


console.log(argv.matematicas);
console.log(argv);
console.log('El promedio es: ' + promedio(argv.m, argv.i, argv.p));
