window.addEventListener("load", () => {
  //...
});
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o botão "Alugar"
  const botoesAlugar = document.querySelectorAll(".alugar-button");

  // Adiciona um evento de clique para cada botão "Alugar"
  botoesAlugar.forEach(function (botao) {
    botao.addEventListener("click", function () {
      // Abre o modal de reserva
      document.getElementById("modal-reserva").style.display = "block";
    });
  });

  // Fecha o modal quando o botão de fechar é clicado
  const fecharModal = document.querySelectorAll(".fechar-modal");
  fecharModal.forEach(function (fechar) {
    fechar.addEventListener("click", function () {
      document.getElementById("modal-reserva").style.display = "none";
    });
  });

  // Envia o formulário de reserva
  const formReserva = document.getElementById("form-reserva");
  formReserva.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados da reserva e adicionar o veículo ao carrinho
    // Por exemplo, você pode enviar os dados para um servidor ou adicionar os detalhes da reserva em uma lista no próprio HTML
    // Depois de processar a reserva, você pode redirecionar para a página de reservas
    // Redireciona para a página de reservas (substitua 'reservas.html' pelo URL correto)
    window.location.href = "reservas.html";
  });

  // Selecionar o botão "Minhas Reservas"
  const minhaReservaButton = document.querySelector(".minha-reserva-button");

  // Adicionar evento de clique ao botão "Minhas Reservas"
  minhaReservaButton.addEventListener("click", () => {
    // Redirecionar para a página de reservas (substitua 'reservas.html' pelo URL correto)
    window.location.href = "reservas.html";
  });

  // Selecionar o botão "Login"
  const loginButton = document.querySelector("nav button");

  // Verificar se o botão de login foi encontrado
  console.log(loginButton);

  // Adicionar evento de clique ao botão "Login"
  loginButton.addEventListener("click", () => {
    // Verificar se o evento de clique está sendo acionado
    console.log("Botão de login clicado!");
    // Redirecionar para a página de login (login.html)
    window.location.href = "login.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os elementos do carro
  var carros = document.querySelectorAll(".card-item");

  // Adiciona um ouvinte de evento de clique para cada carro
  carros.forEach(function (carro) {
    carro.addEventListener("click", function () {
      // Busca as informações do carro clicado
      var id = carro.getAttribute("data-id");
      var carroInfo = obterDetalhesCarro(id);

      // Preenche as informações do modal com os detalhes do carro
      document.getElementById("carro-imagem").src = carroInfo.imagem;
      document.getElementById("carro-titulo").textContent = carroInfo.titulo;
      document.getElementById("carro-descricao").textContent =
        carroInfo.descricao;
      document.getElementById("carro-preco").textContent =
        "Preço: " + carroInfo.preco;

      // Abre o modal
      abrirModalCarro();
    });
  });

  // Função para abrir o modal de detalhes do carro
  function abrirModalCarro() {
    var modalCarro = document.getElementById("modal-carro");
    modalCarro.style.display = "block";
  }

  // Função para buscar as informações do carro com base no ID
  function obterDetalhesCarro(id) {
    // Aqui você pode implementar a lógica para buscar as informações do carro com base no ID
    // Por exemplo, você pode ter um objeto ou uma lista de objetos contendo os detalhes de todos os carros
    // e retornar as informações do carro com o ID correspondente
    // Por enquanto, vamos retornar informações fictícias para demonstração
    return {
      imagem: "caminho/para/imagem.jpg",
      titulo: "Carro Modelo X",
      descricao: "Descrição do carro Modelo X.",
      preco: "$100/dia",
    };
  }
});
