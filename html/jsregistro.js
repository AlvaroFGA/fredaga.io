const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const conPass = document.getElementById("conPassword")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar = false
    let rangeEmail= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    if(nombre.value.length <4){
        warnings+="El nombre no es valido <br>"
        entrar = true
    }
    console.log(rangeEmail.test(email.value))
    if(!rangeEmail.test(email.value)){
        warnings+="El email no es valido <br>"
        entra=true
    }
    if(pass.value.length < 8){
        warnings+="El contraseña no es valida <br>"
        entrar = true
    }
    if(pass.value!=conPass.value){
        warnings+="La contraseña no coincide <br>"
        entrar = true
    }
    if(entrar){
    parrafo.innerHTML=warnings
    }
    else{
        parrafo.innerHTML=""
        alert("Felicidades "+nombre.value+" ya es parte de nuestra comunidad, con tu apoyo mejoraremos la calidad de vida de muchos animales")
    }

})