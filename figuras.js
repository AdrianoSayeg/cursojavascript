//Código del cuadrado
console.group("Cuadrado")
function perimetroC(lado){
    return lado*4;
}
function areaC(lado){
    return lado**2;
}
console.groupEnd();

//Código del triángulo
console.group("Triángulo")
function perimetroT(a,b,c){
    return a+b+c;
}
function areaT(a,b,c){
    const p=perimetroT(a,b,c)/2;
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}

function altura(a,b,c){
    if (a===b|a===c|b===c){
        switch (a){
            case b:
                return Math.sqrt(b**2-(c/2)**2);
                break;
            case c:
                return Math.sqrt(c**2-(b/2)**2);
                break;
            default:
                return Math.sqrt(c**2-(a/2)**2);
                break;
        } 
    }
}
console.groupEnd();

//Código del círculo
console.group("Círculo")
function perimetroCirculo(r){
    return radio*2*PI;
}
function areaCirculo(radio){
    return PI*(radio**2);
} 
console.groupEnd();

function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const perimetro=perimetroC(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;

    const area=areaC(value);
    alert(area);
}
