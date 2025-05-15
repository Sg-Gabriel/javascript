function tabuada(){
    let num = document.getElementById("num")
    let res = document.getElementById("res")
    
    if(num.value.length == 0){
        window.alert("Erro")
    }else{
        let n = Number(num.value)
        res.innerHTML = ""
        for(let c = 1; c <= 10; c++){
            let item = document.createElement("option")
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `res${c}`
            res.appendChild(item)

        }
    }
}