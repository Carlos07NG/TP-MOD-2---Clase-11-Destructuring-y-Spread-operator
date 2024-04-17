//los recursos aprendidos en esta clase: Destructuring y Spread operator.

const numeros=[0,1,2,3,4,5,6,7,8,9,10];

const [a,,b,,c,...restoNumeros]=numeros

console.log(a,b,c,);         
console.log(restoNumeros);   


// Haciendo uso de la desestructuración, crea una variable por cada una de las
// claves del objeto literal y al final mostrar al usuario:

const mascota={
    "nombre":"Hercules",
    "color":"Blanco",
    "raza":"Dogo argentino",
    "tipo":"Perro",
}
const {nombre,tipo,color,raza}=mascota
console.log(`
Hola les presento a mi mascota su nombre es: ${nombre}, es un hermoso ${tipo}, de
color: ${color} y su raza es: ${raza}.
`);