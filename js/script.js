document.addEventListener("DOMContentLoaded", function () {
    const carrinho = document.querySelector(".h-btn2");
    const carrinhoLateral = document.createElement("div");
    carrinhoLateral.className = "carrinho-lateral";
  
    function adicionarAoCarrinho(nome) {
      const item = document.createElement("div");
      item.className = "item-carrinho";
      item.innerText = nome;
      carrinhoLateral.appendChild(item);
    }
  
    const botoesAdicionar = document.querySelectorAll(".adicionar-ao-carrinho");
    botoesAdicionar.forEach(function (botao) {
      botao.addEventListener("click", function (e) {
        e.preventDefault();
        const nomeResidencia = this.parentNode.parentNode.querySelector("h5").innerText;
        adicionarAoCarrinho(nomeResidencia);
      });
    });
  
    carrinho.addEventListener("click", function () {
      if (carrinhoLateral.childElementCount > 0) {
        if (!document.body.contains(carrinhoLateral)) {
          document.body.appendChild(carrinhoLateral);
        }
      }
    });
  });
''  