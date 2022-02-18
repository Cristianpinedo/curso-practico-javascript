// codigo del cuadrado
console.group("cuadrados")

//const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm")

function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("el área del cuadrado es: " + areaCuadrado + "cm al cuadrado")
console.groupEnd()

// codigo del triangulo
console.group("triangulos")
//     const ladoTriangulo1 = 6;
//     const ladoTriangulo2 = 6;
//     const baseTriangulo = 6;
// console.log(
//     "los lados del triangulo miden: " 
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo2 + "cm, " 
//     + baseTriangulo + "cm ")


//     const alturaTriangulo = 5.5;
//     console.log("el perimetro del triangulo es " + alturaTriangulo + "cm")

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
    // console.log("el perimetro del triangulo es =: " + perimetroTriangulo + "cm")

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
    // const areaTriangulo = (baseTriangulo * alturaTriangulo / 2);
    // console.log("el área del triangulo es =: " + areaTriangulo + "cm cuadrados")
console.groupEnd()
// codigo de la circunferencia
console.group("circulos")

// Radio
// const radioCirculo = 4;
// console.log("el radio del circulo es: " + radioCirculo + "cm")

// Diámetro
// const diametroCirculo = radioCirculo *2;
function diametroCirculo(radio){
    return radio * 2;
}

// console.log("el diametro del circulo es: " + diametroCirculo + "cm")

// PI
const PI = Math.PI;
// console.log("PI es igual a: " + PI)

// Circunferencia

// const perimetroCirculo = diametroCirculo * PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// console.log("el perimetro del circulo es: " + perimetroCirculo + "cm")

// Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.log("el área del circulo es: " + areaCirculo + "cm")

console.groupEnd()


// Interactuando con el HTML
// Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrada(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
