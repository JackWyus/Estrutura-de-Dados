var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//Vamos inserir o número '10' depois do nove.

numbers[10] = 10;
//Chamamos a Array 'numbers' e a posição que esse novo valor ficará, e informamos o seu valor.

// Outra forma mais efiência de inserir um novo elemento dentro do Array

//Será adicionado depois do último elemento
numbers.push(15)


//Será adicionado antes do primeiro elemento '0'

numbers.unshift(-1)

console.log(numbers);





