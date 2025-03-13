document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);

    const resultadoDiv = document.getElementById('resultado');

    if (campoB > campoA) {
        resultadoDiv.innerHTML = '<p>Formulário válido!</p>';
        resultadoDiv.style.color = 'green';
    } else {
        resultadoDiv.innerHTML = '<p>Formulário inválido! O número B deve ser maior que o número A.</p>';
        resultadoDiv.style.color = 'red';
    }
});