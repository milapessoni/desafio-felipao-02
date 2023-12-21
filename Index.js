let nomePersonagem = ("Jorjão Funilaria")
let vitorias = 580
let derrotas = 325
let pontosPartida;(580, 325)
let saldoDeVitorias = vitorias - derrotas

function ranqueFinal(vitorias, derrotas){
    return vitorias - derrotas
}

if (pontosPartida < 10) {
    ranqueAtual = "Ferro";
} else if (pontosPartida >= 11 && pontosPartida < 20) {
    ranqueAtual = "Bronze";
} else if (pontosPartida >= 21 && pontosPartida < 50) {
    ranqueAtual = "Prata";
} else if (pontosPartida >= 51 && pontosPartida < 80) {
    ranqueAtual = "Ouro";
} else if (pontosPartida >= 81 && pontosPartida < 90) {
    ranqueAtual = "Diamante";
} else if (pontosPartida >= 91 && pontosPartida < 100) {
    ranqueAtual = "Lendário";
} else  (pontosPartida >= 101); {
    ranqueAtual = "Imortal";

console.log("O Herói de nome, " + nomePersonagem + " terminou a temporada com  " + saldoDeVitorias + " alcançando o nível de "+ ranqueAtual + "!");
    
}


