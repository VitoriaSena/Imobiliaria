function verificarCPF() {
  var cpf = document.getElementById("cpf").value;
  var resultado = document.getElementById("resultado");
  var tentarNovamenteBtn = document.getElementById("tentarNovamente");
  var prosseguirCadastroBtn = document.getElementById("prosseguirCadastro");

 
  cpf = cpf.replace(/\D/g, '');

  
  if (cpf.length !== 11) {
      resultado.innerHTML = "CPF inválido. Insira os 11 dígitos.";
      tentarNovamenteBtn.style.display = "block"; 
      prosseguirCadastroBtn.style.display = "none"; 
      return;
  }

  var somaDosProdutos = 0;
  for (var i = 0; i < 9; i++) {
      somaDosProdutos += parseInt(cpf.charAt(i)) * (10 - i);
  }

  var dezenaDigitoVerificador;
  var restoDivisaoPor11 = somaDosProdutos % 11;

  if (restoDivisaoPor11 <= 1) {
      dezenaDigitoVerificador = 0;
  } else {
      dezenaDigitoVerificador = 11 - restoDivisaoPor11;
  }

  
  if (dezenaDigitoVerificador === parseInt(cpf.charAt(9))) {
      resultado.innerHTML = "CPF válido.";
      tentarNovamenteBtn.style.display = "none"; 
      prosseguirCadastroBtn.style.display = "block"; 
  } else {
      resultado.innerHTML = "CPF inválido.";
      tentarNovamenteBtn.style.display = "block"; 
      prosseguirCadastroBtn.style.display = "none"; 
  }
}

function tentarNovamente() {
  document.getElementById("cpf").value = ""; 
  document.getElementById("resultado").innerHTML = ""; 
  document.getElementById("tentarNovamente").style.display = "none"; 
  document.getElementById("prosseguirCadastro").style.display = "none"; 
}

function prosseguirParaCadastro() {
  
  alert("Redirecionando para a página de cadastro aguarde...");
}
