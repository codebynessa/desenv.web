// var generateName = require("sillyname");
// var sillyName = generateName();

// import xxx from "sillyname"; // importando o modulo sillyname
// var sillyName = generateName(); // chamando a funcao do modulo sillyname
// console.log(`My name is ${sillyName}.`); //faz parte do core do node

const superheroes = require("superheroes") ; // importando o modulo superheroes
const name = superheroes.random(); // chamando a funcao do modulo superheroes
console.log(`I am ${name}!`); // imprimindo o nome do super-heroi