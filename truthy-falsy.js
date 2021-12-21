
//uma string vazia é falsa e sempre retorna true
console.log("" == false)
//o número zero também retorna true pois também é considerado falso.
console.log(0 == false)
//o número 1 irá retornar false, pois ele é considerado o verdadeiro.
console.log(1 == false)

//declarar uma variável vazia retornará undefined
let vazio;
let nullo = null;

//usaremos o typeof para saber que tipo dado que está sendo guardado nesta variável
let numero = 1
let texto = "texto"
console.log(typeof numero); //numero;
console.log(typeof texto);  //string;
console.log(typeof vazio);  //undefined;
console.log(typeof nullo);  //object;