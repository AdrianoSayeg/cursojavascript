//Helpers
function esPar(numero){
    return(numero%2===0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}

//Calculadora de medianas
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);

    if(esPar(lista.length)){
        const mitad1=lista[mitad];
        const mitad2=lista[mitad-1];

        const mediana=calcularMediaAritmetica([mitad1,mitad2]);
        return mediana
    } else{
        const mediana=lista[mitad];
        return mediana
    }
}

//Mediana General
const salariosCol=colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted=salariosCol.sort(
    function(salarioA,salarioB){
        return salarioA-salarioB;
    }
);

const medianaGeneralCol=medianaSalarios(salariosColSorted);

//Mediana del top 10%
const spliceStrart=(salariosColSorted.length*90)/100;
const spliceCount=salariosColSorted.length-spliceStrart;

const salariosColTop10=salariosColSorted.splice(
    spliceStrart,
    spliceCount,
);

const medianaTop10Col=medianaSalarios(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});

