let nomeHeroi = "Homem Aranha"
let nivelXP = 10100
let mensagem = ""

if (nivelXP <= 1000){
    mensagem = "Ferro"
} else if (nivelXP > 1001 && nivelXP <= 2000){
    mensagem = "Bronze"
} else if (nivelXP > 2.001 && nivelXP <= 5000){
    mensagem = "Prata"
} else if (nivelXP > 5.001 && nivelXP <= 7000){
    mensagem = "Ouro"
} else if (nivelXP > 7.001 && nivelXP <= 8000){
    mensagem = "Platina"
} else if (nivelXP > 8.001 && nivelXP <= 9000){
    mensagem = "Ascendente"
} else if (nivelXP > 9.001 && nivelXP <= 10000){
    mensagem = "Imortal"
} else {
    mensagem = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + mensagem)

