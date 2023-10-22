let resultado = partidas(110, 5)

function partidas(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas
    return saldoRankeadas
}

let nivel;

if(resultado < 10){
    nivel = "Ferro"
}else if(resultado > 10 && resultado <= 20){
    nivel = "Bronze"
}else if(resultado > 20 && resultado <= 50){
    nivel = "Prata"
}else if(resultado > 50 && resultado <= 80){
    nivel = "Ouro"
}else if(resultado > 80 && resultado <= 90){
    nivel = "Diamante"
}else if(resultado > 90 && resultado <= 100){
    nivel = "Lendário"
}else if(resultado > 100){
    nivel = "Imortal"
}else{
    nivel = "nivel invalido"
}

console.log("O Jogador tem saldo de " + resultado + " e está no nível " + nivel)