function enviar() {
  var nome = document.getElementById("nome");

  if (nome.value != "") {
      alert("Obrigado "+nome.value+"! Não foi possivel atendê-lo");
  } else {
    alert("Por gentileza, preencha o formulário novamente.");
  }
}
