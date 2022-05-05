/*Estrutura de Dados*/
    //Array

/*  
    O que é o Array?
        > Ele armazena valores sequencialmente e do mesmo tipo(string,number,boolean) ou seja, ele é tipado(As linguagens de programação não tipadas são linguagens onde podemos declarar variáveis sem definir o seu tipo, por exemplo, o próprio Javascript).
        No Javascript você pode armazernar valores de todos os tipos em uma mesma Array

        Como por exemplo essa Array com id de "Comida" recebendo dentro de "[]" valores do tipo;number,string,boolean e float tudo na mesma array.
        var Comida = [5,"cachorro",true,5.5];
*/

// Vamos criar algumas variáveis que receberão a temperatura de acordo com o mês do ano

var temperaturaMesesJaneiro = 31.39;
var temperaturaMesesFevereiro = 35.3;
var temperaturaMesesMarco = 42;
var temperaturaMesesAbril = 38;
var temperaturaMesesMaio = 25.5;
console.log('Temperatura Fev: '+temperaturaMesesFevereiro+'º')

//Podemos notar que são bastante os meses de um ano, uma forma de simplificar isso é utilizando um Array

//forma de escrever um array
var temperaturaMeses = []

temperaturaMeses[0] =  31.39;
temperaturaMeses[1] =  35.3;
temperaturaMeses[2] =  42;
temperaturaMeses[3] =  38;
temperaturaMeses[4] =  25.5;
//temos aqui cinco posições comprieendidas de 0 até 4, ela possui o id referente a tempetauraMeses

console.log(temperaturaMeses[0])
//Com isso não precisamos chamar especificamente o mês no console, basta chamar a array e sua posição correspondente ao mês