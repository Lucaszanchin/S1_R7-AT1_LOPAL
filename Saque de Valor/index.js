let saldo = 500; // Saldo inicial de 500 reais
let saqueBanca;

while (saldo > 0) { 
  saque = parseFloat(prompt("Saldo atual: R$" + saldo + "Escreva o valor do saque:"));  // Pergunta o valor para saque

  if (isNaN(saqueBanca)) { // Vê se o valor digitado é um número
    alert("Escreva um valor numérico válido.");
  }
  if (saque <= saldo && saqueBanca > 0) { // Se o valor for válido e menor ou igual ao saldo
    saldo -= saqueBanca; // Tira do saldo o valor que foi sacado
    alert("Saque foi feito. Novo saldo é de: R$" + saldo);
  } else {
    alert("Valor inválido ou saldo insuficiente.");
  }
}

alert("Conta bancária sem saldo."); // Termina quando o saldo for 0