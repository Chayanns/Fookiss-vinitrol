document.addEventListener('DOMContentLoaded', function() {
    var contadorCarrinho = 0;
    var contadorFavoritos = 0;
    var spanContadorCarrinho = document.getElementById('contador-carrinho');
    var spanContadorFavoritos = document.getElementById('contador-favoritos');

    var botoesAdicionarCarrinho = document.querySelectorAll('.btncarrinho');
    var botoesAdicionarFavoritos = document.querySelectorAll('.btnfavoritos');

    botoesAdicionarCarrinho.forEach(function(botao) {
        botao.addEventListener('click', function() {
            contadorCarrinho++;
            spanContadorCarrinho.textContent = contadorCarrinho;

            var item = this.parentElement.querySelector('h3').innerText;
            var mensagem = `O item "${item}" foi adicionado ao carrinho!`;
            exibirMensagem(mensagem);
        });
    });

    botoesAdicionarFavoritos.forEach(function(botao) {
        botao.addEventListener('click', function() {
            contadorFavoritos++;
            spanContadorFavoritos.textContent = contadorFavoritos;

            var item = this.parentElement.querySelector('h3').innerText;
            var mensagem = `O item "${item}" foi adicionado aos favoritos!`;
            exibirMensagem(mensagem);
        });
    });

    function exibirMensagem(mensagem) {
        var divMensagem = document.createElement('div');
        divMensagem.classList.add('mensagem-adicionado');
        divMensagem.textContent = mensagem;
        document.body.appendChild(divMensagem);

        setTimeout(function() {
            divMensagem.remove();
        }, 3000);
    }
});
