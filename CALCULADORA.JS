let resultado = calculateRanking(300,27)

function calculateRanking(victory, defeat){
    let balance = victory - defeat
    let level;
    if (balance < 10) {
        level = "Ferro";
    } else if (balance <= 20){
        level = "Bronze";
    }else if (balance <= 50){
        level = "Prata";
    }else if (balance <= 80){
        level = "Ouro";
    }else if (balance <= 90){
       level = "Diamante";
    }else if (balance <= 100){
        level = "Lendário";
    }else if (balance >= 101){
        level = "Imortal";
    }else{
        level = undefined;
    }
    return "O Herói tem saldo de: " + balance + " e está no nível de " + level + "!"
}
console.log(resultado)