// rest
function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // arguments.map
    // console.log(arguments)
    // return a + b + c;
}

console.log(somar(10, 20, 30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

// spread
const numeros = [1,2,3,4]
console.log(...numeros)

const timeDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timeDeFutebolDeRio = ['flamengo', 'vasco', 'fluminense', 'botafogo'];

// const timeDeFutebol = timeDeFutebolDeSp.concat(timeDeFutebolDeRio);
const timeDeFutebol = [...timeDeFutebolDeSp, ...timeDeFutebolDeRio];

// timeDeFutebolDeSp.concat(timeDeFutebolDeRio)
console.log(timeDeFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6,
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8,
}

console.log(carroDaAna);

// desestruturação
// const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...outrosTimes] = timeDeFutebol;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)