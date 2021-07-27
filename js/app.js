var boton = document.getElementById("botn");
var input = document.getElementById("input");
input.focus();
i = 0
var letra = document.getElementById("letra")
letra.innerHTML= "A"



//Mensajes

var ganaste = document.querySelector(".ganaste")
var perdiste = document.querySelector(".perdiste")
var finish = document.querySelector(".finish")

///Sonidos 
var P = document.getElementById("sonidoP")
var F = document.getElementById("sonidoF")
var G = document.getElementById("sonidoG")
P.style.display ="none"
G.style.display="none"
F.style.display="none"
setInterval(()=>{
    F.play()
})

function mostrar(){
    var input = document.getElementById("input").value.toUpperCase()
    var abece = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    document.getElementById("input").focus();
    if(input == abece[i]){
        i++ ; 
        G.play()
        letra.innerHTML = abece[i]
        ganaste.style.display="block"
        setTimeout(function(){
            ganaste.style.display ="none"
        },1000 )
        if(input == "z" || input == "Z"){
            finish.style.display="block"
            letra.innerHTML = "Felicidades GANASTE a seguir repasando"
            setTimeout(function(){
                letra.innerHTML = "A"
                finish.style.display="none"
            },1000*7)
        }
        document.getElementById("input").value = ""

    }
    else{
        input = ""
        letra.innerHTML = "A"
        i = 0;
        perdiste.style.display = "block"
        document.getElementById("input").value = ""
        setTimeout(function(){
            perdiste.style.display ="none"
        },1000 * 2)
        P.play()
    }
};

input.addEventListener("keypress", function(e){
    if(e.key == 'Enter'){
        mostrar()
    }
})