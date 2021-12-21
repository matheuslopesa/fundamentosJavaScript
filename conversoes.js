const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
//retornar true
//porque aqui os sinais de "==" está comparando somente os valores;

console.log(numero === numeroString);
//retornar false
//pois aqui os sinais de igualdade estão comparando os valores e os tipos;
//'numero' diferente de 'string'

//Realizando uma conversão de numero para string
console.log(typeof String(numero));
//retorna String

//Realizando uma conversão de string para número
console.log(typeof Number(numeroString));
//retorna Number

//Agora se eu comparar as duas variáveis realizando as coversões elas me retornarão true
console.log(Number(numeroString) === numero);
//retorna true

//SOMANDO**************
console.log(numeroString + numero);
//retorna '456456', pois apenas realizou uma concatenção


console.log(Number(numeroString) + numero);
//retorna 912
//convertemos uma string em número. Agora ele somou corretamente as varaiáveis


//toString()
//podemos utilizar também após a nossa variável
console.log(numeroString + numero.toString());