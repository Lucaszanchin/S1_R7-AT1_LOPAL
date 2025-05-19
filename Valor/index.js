let valor; // variável que armazena o valor da compra.
let total = 0; //varável que armazena o total da compra, e se inicia em 0

do {
  valor = parseFloat(prompt("Digite o valor da compra (E digite 0 para finalizar):")); //Aqui o valor será perguntado ao usuário.

  if (!isNaN(valor) && valor >= 0) { //Verica se o usuário digitou um número e se o valor digitado é maior ou igual a 0
    if (valor > 0) {
      total += valor;
    }
  } else {
    alert("Digite um número válido."); 
  }

} while (isNaN(valor) || valor !== 0);

alert("Total da compra: R$ " + total.toFixed(2)); //Mostra o total da compra e arredonda o valor