function contar(){
    let inic = document.getElementById("txti")
    let fina = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")
    if(inic.value.length == 0 || fina.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "Verifique os dados inseridos e tente novamente! "
    }
    else{
        res.innerHTML = "Contando: <br>"
        let i = Number(inic.value)
        let f = Number(fina.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("[Valor de passo inválido] Considerando valor 1")
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}


