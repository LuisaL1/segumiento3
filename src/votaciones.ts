let votosAnaMaria: number = 0;
let votosDiegoAcero: number = 0;

const votos = [1, 1, 2, 1, 2, 2, 1, 1, 2, 1];

for (let i: number = 0; i < votos.length; i++) {
    const opcionVoto: number = votos[i];

    if (opcionVoto === 1) {
        votosAnaMaria++;
    } else if (opcionVoto === 2) {
        votosDiegoAcero++;
    } else {
        console.log("Opción inválida de voto");
    }
}

if (votosAnaMaria > votosDiegoAcero) {
    console.log("El ganador es Ana Maria Suarez");
} else if (votosDiegoAcero > votosAnaMaria) {
    console.log("El ganador es Diego Acero");
} else {
    console.log("La votación terminó en empate");
}

console.log(`Resultados:\nAna Maria Suarez: ${votosAnaMaria} votos\nDiego Acero: ${votosDiegoAcero} votos`);
