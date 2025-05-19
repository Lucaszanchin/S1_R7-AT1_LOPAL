let numero; //Essa variável armazena o número que o usuário deseja

do {
    numero = parseFloat(prompt("Digite um número positivo:"));

    if (isNaN(numero)) {  //Verifica se o usuárico digitou um número
        alert(`Você não digitou um número.`)

    }else if (numero >= 0) {
        alert(`Parabéns você digitou um número positivo!`) ;//Confirma ao usuário que ele digitou um número positivo
    }

} while (numero < 0 || (isNaN(numero))) // Repete o código até o usuário colocar um número postivo