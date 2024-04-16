let base = prompt("Digite a base:");
let altura = prompt("Digite a altura:");

function calculaArea(base, altura) {
    area = base * altura
    return area;
}

alert("A área do retângulo é: " + calculaArea(base, altura));