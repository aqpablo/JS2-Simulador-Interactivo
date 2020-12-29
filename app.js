
// 1 - bucle que muestre en consola la tabla de mutiplicar de un numero

function numberToTable(number){
    if(number){
        console.log("Tabla del " + number + ":");
        for(let i = 1; i <= 10; i++){
            console.log(i + " x " + number + " = " + i*number);
        }
    }
}


// Funcion es Primo que será reutilizada

function esPrimo(numPrimo){
    let result = true;
    if(numPrimo){
        for(let i = 2; i < numPrimo; i++){
            if (numPrimo % i == 0){
                result = false;
                break;
            }
        }
    }
    return result    
}

// 2 - funcion que determina si un numero es primo

function consultarPrimo(numero){ 
    
    return esPrimo(numero) ? console.log("es primo") : console.log("no es primo");    
    
}

// 3 - mostrar los numeros primos entre 0 y 100

function primosEntre0y100(){
    for(let numero = 1; numero < 100; numero++){
        
        if(esPrimo(numero)==true){console.log(numero)}
    }
}

// 4 - mostrar los primeros 100 numeros primos

function primeros100Primos(){
    let count = 1, numero = 1;
    while(count <= 100){
        if(esPrimo(numero) == true){console.log(numero); count++;}
        numero++;
    }
}

// 5 - funcion

function promedio(num1 = 0, num2 = 0){
    if (num1 == ""){num1 = 0}
    if (num2 == ""){num2 = 0}
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return (num1+num2)/2;

}

//Estructura del programa

numberToTable(prompt("Ingrese un número para mostrar su tabla de multiplicar en consola"));

console.log("-----");

consultarPrimo(prompt("Ingrese un número del cual quiera conocer si es primo o no"));

console.log("-----");

alert("Ahora se mostrarán los números primos entre 0 y 100");
primosEntre0y100();

console.log("-----");

alert("Ahora se mostrarán los 100 primeros números primos");
primeros100Primos();

console.log("-----");

alert("Por último se mostrará el promedio de dos números");
var n1 = prompt("Primer número");
var n2 = prompt("Segundo número");
console.log("Promedio = " + promedio(n1,n2));
alert("El promedio es "+promedio(n1,n2));

console.log("-----");