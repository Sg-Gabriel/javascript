var idade = 65
if(idade >= 18 && idade < 65) {
    console.log("Voto obrigatório")
}else if(idade >= 16 && idade < 18 || idade >= 65){
    console.log("Voto opcional")
}else {
    console.log("Não vota")
}