$(document).ready(function () {

    // Slide down form on button click
    $('header button').on('click', function () {
        $('form').slideDown();
    });

    // Slide up form on cancel button click
    $('#botao-cancelar').on('click', function () {
        $('form').slideUp();
    });

    // Handle form submission
    $('form').on('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const nomeTarefa = $('#nome-tarefa').val();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const timeData = new Date();
        
        // Create new list item
        const novoItem = $('<li style="display: none"></li>');
        $('<img>').attr('src', enderecoDaNovaImagem).attr('alt', 'Imagem da tarefa').appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank">Ver imagem em tamanho real</a>
            </div>
            <span class="nome-tarefa">${nomeTarefa}</span>
            <span class="time-data">Adicionado em ${timeData.toLocaleDateString()} às ${timeData.toLocaleTimeString()}</span>
            <button type="button" class="botao-remover">Remover tarefa</button>
            <button type="button" class="botao-compartilhar">Ver Imagem</button>
        `).appendTo(novoItem);

        // Add new item to list and fade in
        novoItem.appendTo('ul').fadeIn(1000);

        // Clear form inputs
        $('#nome-tarefa').val('');
        $('#endereco-imagem-nova').val('');
    });

    // Handle click on remove button (delegated to parent)
    $('ul').on('click', '.botao-remover', function () {
        $(this).closest('li').fadeOut(1000, function () {
            $(this).remove();
        });
    });

    // Handle click on share button (delegated to parent)
    $('ul').on('click', '.botao-compartilhar', function () {
        // Get the URL to share
        const enderecoDaNovaImagem = $(this).closest('li').find('img').attr('src');
        // Open the URL in a new tab
        window.open(enderecoDaNovaImagem, '_blank');
    });
});
