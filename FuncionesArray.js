//Carlos andres alzate agredo 2216089
//Funciones que puede tener un Array o lista en JavaScript


//primer metodo:
//ForEach(): esta funcion nos sirve para recorrer los elementos del Array. este metodo ejecutara la funcion que tu le proporciones

const Comidas = ["italiana", "Japonesa", "China", "Mexicana"]

Comidas.forEach((Nombre, index) =>{
if(index == 3)
console.log(Nombre)
})

//segundo metodo:
//map(): Esta funcion nos crea un nuevo arreglo con respecto a la logica que le hayamos dado a la funcion.

const Numeros = [1,2,3,4,5,6,7,8,9]

const newNum= Numeros.map (numero => numero + 100 )

console.log(newNum)

//tercer metodo: 
//includes(): sirve para verificar si el elemento que buscas se encuentra en el array y solamente te devuelve true o falso dependiendo de si lo encuentra o no.

const colegios = ["san frnacisco", "coomeva", "bolivar", "camacho"]
console.log(colegios.includes("bolivar"))
console.log(colegios.includes("comfandi"))

//cuarto metodo: 
//filter(): este metodo crea un nuevo array con respecto a los elementos que cumplan cuya condicion proporcionaste en la funcion.
 
const Enteros = [1,2,3,4,5,6,7,88,99,100,15]
const newEnteros = Enteros.filter(num => num >=6 || num <= 2);
console.log(newEnteros)
console.log(Enteros)


//quinto metodo:
//reduce(): este metodo nos sirve para reducir el valor de un elemnto del array sea tipo numero,string, objeto...
 const numerito=[22,3,4,5,66,5]
 const suma = numerito.reduce(function(acumulador,elemento){
    return acumulador + elemento
 },0);
 console.log(suma)

 //sexto metodo:
 //push(): le agrega un elemento al final del array
 let ingenieria = [ "electrica","informatica","industrial","biomedica"]
 ingenieria.push("multimedia")
 console.log(ingenieria)

 //pop():
 let ingenierias = [ "electrica","informatica","industrial","biomedica"]
 let ultimoElemt= ingenierias.pop("")
 console.log(ingenierias)


 //shift():
 let ingenieriass = [ "electrica","informatica","industrial","biomedica"]
 let primerElemt = ingenierias.shift("")
 console.log(ingenierias)

//unshit():
 const grados = [ 2,3,4,5,4,7,8,9]
 grados.unshift(200)

 //some():
 const LargeNum=[ 2,3,1,4,5,6,7,]
 const newlarge= LargeNum.some(num => num >1);
 console.log(newlarge)

 //splice():

 const Numeross = [1,2,3,4,5,6,7,8,9]

 Numeross.splice(7,8,9,4,5,6)
 console.log(Numeross)

 //slice():
 let arr=[32,23,45,65]
 let array = arr.slice(0,2)
 console.log(array)
 

 //every():
 const lista= [2,3,4,5,6,7]
 const  mayorque= lista.every(num => num >4)
 console.log(mayorque)

 const  menorque= lista.every(num => num < 8)
 console.log(menorque)

 // concat():
const nombre = [ "carlos", "valeria","samuel","santiago"]
const apellitos = [ "alzate","duque", "estupiñam", "colonia"]

const union = nombre.concat(apellitos);
console.log(union)


 //crear una nueva sucursal llamado 01-Matrices



 function numerosss(i){
   if(i%2 ==0){
      console.log(i + " el numero es par")
   }else{
      console.log(i + " el numero es impar")
   }

 }

 const numeros2 = function(i){
   if(i%2 ==0){
      console.log(i + " el numero es par")
   }else{
      console.log(i + " el numero es impar")
   }

 }


const numeros3 =(i)=>{
   if(i%2 ==0){
      console.log(i + " el numero es par")
   }else{
      console.log(i + " el numero es impar")
   }

} 

 console.log(numerosss(2))
 console.log(numeros2(4))
 console.log(numeros3(7))


 