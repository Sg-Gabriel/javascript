function carregar(){
    var img = window.document.getElementById("img")
    var msg = window.document.getElementById("msg")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são: ${hora}:${minuto}`

    if(hora > 0 && hora < 12){
        img.src = "fotomanha.jpg"
        document.body.style.background = "#c6c2b7"
    }else if(hora >= 12 && hora < 18){
        img.src = "fototarde.jpg"
        document.body.style.background = "#e59177"
    }else {
        img.src = "fotonoite.jpg"
        document.body.style.background = "#1a3459"
    }
}