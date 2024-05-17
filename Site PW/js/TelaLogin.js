$(document).ready(function () {
    $('#loginButton').click(function () {
        // Obtendo os valores dos campos de entrada
        var username = $('#username').val().trim();
        var password = $('#password').val().trim();

        // Verificando se os campos estão vazios
        if (username === '') {
            alert('Por favor, insira o nome de usuário.');
            return false;
        }

        if (password === '') {
            alert('Por favor, insira a senha.');
            return false;
        }

        // Verificando o comprimento do nome de usuário
        if (username.length < 6 || username.length > 50) {
            alert('O nome de usuário deve ter entre 6 e 50 caracteres.');
            return false;
        }

        // Verificando o comprimento da senha
        if (password.length < 8 || password.length > 50) {
            alert('A senha deve ter entre 8 e 50 caracteres.');
            return false;
        }

        // Se todos os campos estiverem preenchidos e dentro dos limites de comprimento, o formulário será enviado
        alert('Login bem-sucedido!');
     
        // Aqui você pode adicionar a lógica para enviar o formulário para o servidor
        window.location.href = "index.html";
});
});