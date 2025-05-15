function limpar(){
    peso.value = ""
    altura.value = ""
    idade.value = ""
}     

function calcular(){
    idade = document.getElementById("idade")
    peso = document.getElementById("peso")
    altura = document.getElementById("altura")
    imc = Number(peso.value) / Number(altura.value)**2
    res = document.getElementById("res")
    anos = idade.value
    var clas = ""
    if(peso.value <= 0 || altura.value <= 0){
        window.alert("[ERRO] Verifique o valor inserido")
    }else if(imc <= 18.5){
        //abaixo do peso
        clas = "abaixo do peso"
    }else if (imc < 25){
        //peso ideal
        clas = "no peso ideal"
    }else if(imc < 30){
        //um pouco acima do peso
        clas = "um pouco acima do peso"
    }else if(imc < 35){
        //obesidade grau I
        clas = "com obesidade grau I"
    }else if(imc < 40){
        //obesidade grau II
        clas = "com obesidade grau II"
    }else{
        //obesidade grau III
        clas = "com obesidade grau III"
    }
   
   res.innerHTML = `${anos} Anos<p>Seu IMC é de ${imc.toFixed(2)} você está ${clas}</p>`
}