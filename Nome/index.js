let nome = "";
let sobrenome = "";

while (nome === "") { // Enquanto o nome for vazio, ou seja o usuário não preencher, pede novamente.
  nome = prompt("Digite seu primeiro nome:");

  if (nome === null) { // Vê se o usuário clicou em "Cancelar"
    nome = ""; // Deixa vazio para repetir o loop
  } else if (!isNaN(nome)) {
    alert ("Você não digitou um nome.")
  }
}
while (sobrenome === "") { // Enquanto o nome for vazio, ou seja o usuário não preencher, pede novamente.
  sobrenome = prompt("Digite seu sobrenome:");

  if (sobrenome === null) { //Vê se o usuário clicou em "Cancelar"
    sobrenome = ""; // Deixa vazio para repetir o loop
  } else if (!isNaN(sobrenome)){
    alert ("Você não digitou um sobrenome.")
  }
}
alert("Nome completo " + nome + " " + sobrenome); // Mostra o nome completo após ambos serem preenchidos