$(document).ready(function () {
    $('#registerButton').click(function () {
      // Obtendo os valores dos campos de entrada
      var username = $('#username').val().trim();
      var email = $('#email').val().trim();
      var cmail = $('#cmail').val().trim();
      var password = $('#password').val().trim();
      var cpassword = $('#cpassword').val().trim();

      // Verificando se os campos estão vazios
      if (username === '' || email === '' || cmail === '' || password === '' || cpassword === '') {
        alert('Por favor, preencha todos os campos.');
        return false;
      }

      // Verificando o comprimento do nome de usuário
      if (username.length < 6 || username.length > 50) {
        alert('O nome de usuário deve ter entre 6 e 50 caracteres.');
        return false;
      }

      // Verificando se os emails coincidem
      if (email !== cmail) {
        alert('Os endereços de e-mail não coincidem.');
        return false;
      }

      // Verificando o comprimento da senha
      if (password.length < 8 || password.length > 50) {
        alert('A senha deve ter entre 8 e 50 caracteres.');
        return false;
      }

      // Verificando se as senhas coincidem
      if (password !== cpassword) {
        alert('As senhas não coincidem.');
        return false;
      }

      // Verificando se o termo foi aceito
      if (!$('#termo').prop('checked')) {
        alert('Você precisa aceitar os termos para criar uma conta.');
        return false;
      }

      // Se todos os campos estiverem preenchidos corretamente, o formulário será enviado
      alert('Cadastro bem-sucedido!');
      // Aqui você pode adicionar a lógica para enviar o formulário para o servidor
      window.location.href = "login.html"
    });
  });