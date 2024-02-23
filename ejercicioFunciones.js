function funcion1(numero){
    if (numero % 2 === 0) {
        console.log(`${numero} es  número par`);
    } else {
        console.log(`${numero} es  número impar`);
    }
};

const funcion2 = function(numero){
    if (numero % 2 === 0) {
        console.log(`${numero} es número par`);
    } else {
        console.log(`${numero} es número impar`);
    }
};



const funcion3 = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es número par`);
    } else {
        console.log(`${numero} es  número impar`);
    }
};

console.log(funcion1(6))
console.log(funcion2(3))
console.log(funcion3(4))