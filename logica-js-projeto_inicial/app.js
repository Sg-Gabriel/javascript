alert("Boas vindas ao jogo do número secreto!");
let quantLimite = 1000;
let numSecreto = parseInt(Math.random() * quantLimite + 1);
let chute;
let tentativa = 1;
console.log(numSecreto);
while(chute != numSecreto){
         chute = prompt(`Escolha um número entre 1 e ${quantLimite}`);
    if (chute == numSecreto){
        break;
    }else{
        if(chute < numSecreto){
            alert(`O número secreto é maior que ${chute}`);
        }else{
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativa++;
        
    }
}
let palavraTentativa = tentativa > 1 ? "Tentativas:" : "Tentativa:";
alert(`${palavraTentativa} ${tentativa}
Você acertou! o número secreto era o ${numSecreto}`);