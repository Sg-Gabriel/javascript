function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.getElementById("res")
    if(fano.value == 0 || Number(fano.value) > ano || Number(fano.value) < 1900){
        window.alert("[Erro] Verifique os dados inseridos e tente novamente")

    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = "homem"
            if(idade >= 0 && idade <= 12){
                //imagem criança
                img.setAttribute("src","criancahomem.jpg")
            }else if(idade < 21){
                //imagem jovem
                img.setAttribute("src","jovemhomem.jpg")
            }else if(idade < 60){
                //imagem adulto
                img.setAttribute("src","adultohomem.jpg")
            }else {
                //imagem idoso
                img.setAttribute("src","idosohomem.jpg")
            }
            //
        }else if(fsex[1].checked){
            genero = "mulher"
            if(idade >= 0 && idade <= 12){
                //imagem criança
                img.setAttribute("src","criancamulher.jpg")
            }else if(idade < 21){
                //imagem jovem
                img.setAttribute("src","jovemmulher.jpg")
            }else if(idade < 60){
                //imagem adulto
                img.setAttribute("src","adultamulher.jpg")
            }else {
                //imagem idoso
                img.setAttribute("src","idosamulher.jpg")
            }
        }
    }
    res.style.textAlign = "center"
    res.innerHTML = `<p>Você é ${genero} e está com ${idade} anos!</p>`
    res.appendChild(img)
       
}