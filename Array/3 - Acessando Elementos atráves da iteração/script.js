// A execução repetida de uma sequência de instruções é chamada de iteração (iteration).


var diasDaSemana = ["Segunda-Feira","Terça-feiar","Quarta-feira","Quinta-feira","Sexta-feira","Sabado","Domingo"];

//Vamos mostrar no console de uma vez, todos os dias da semana,usando uma estrutura de repetição

//Criamos uma estrutura de repetição com for,onde ele possui um variável chamada 'i' que recebe o valor 'Zero', se i = 0 for menos que 'diasDaSemana.lenght'(.lenght vai retornar um number correspondente a quantidade total de elementos dentro da Array), adicione +1 ao i,logo em seguida execute o código abaixo mostrando o valor de i a cada repetição até que a condição seja atingida.
for(let i = 0; i < diasDaSemana.length; i++){
    console.log(diasDaSemana[i])
}


/* outro exemplo usando SEQUÊNCIA DE FIBONACCI - A SEQUÊNCIA DE FIBONACCI nada mais é que uma sucessão de números,e paraobter cada número da sequência devemos somar os dois últimos algarismos para obter o próximo.*/

var fibonacci = []
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for(let i = 2; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    console.log(fibonacci)
}





