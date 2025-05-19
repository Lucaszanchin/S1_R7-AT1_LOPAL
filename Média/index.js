let nota; //Esaa variável irá armazenar a nota
let soma = 0; 
let quantidade = 0;

do {
  nota = parseFloat(prompt("Digite uma nota (de 0 a 10). Digite número negativo para sair:")); // Pede uma nota ao usuário

  if (!isNaN(nota)) {
    if (nota >= 0 && nota <= 10) {
      soma += nota;   // Nota válida que acumula a soma e conta a quantidade
      quantidade++;
    } else if (nota >= 0) {
      alert("Nota inválida. Digite um valor entre 0 e 10."); // Número maior que 10 é inválido, mas não termina o loop
    }
  } else { // Se nota for negativa, sai do loop naturalmente
    alert("Digite um número válido."); // Entrada não numérica
  }

} while (isNaN(nota) || nota >= 0);

if (quantidade > 0) { // Após sair do loop, calcula a média se houver notas válidas
  let media = soma / quantidade;
  alert("Média das notas: " + media.toFixed(2)); 
} else {
  alert("Nenhuma nota válida foi digitada.");
}