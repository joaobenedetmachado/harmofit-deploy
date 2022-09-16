
function login() {
    window.location = "problema.html"
}
function ombro() {
    window.location = "ombro.html"
}
function joelho() {
    window.location = "joelho.html"
}
function costas() {
    window.location = "costas.html"
}

function avaliacaoOmbro() {
    window.location = "avaliacao.html"
}
function avaliacaoJoelho() {
    window.location = "avaliacao.html"
}
function avaliacaoCostas() {
    window.location = "avaliacao.html"
}
function feedback() {
    window.location = "feedback.html"
}


function like() {
    window.alert('like')
}

function dislike() {
    window.alert('dislike')
}

function voltar() {
    window.history.go(-1)
}

function retorno() {
    window.location = "problema.html"
}

function obrigado() {
    window.location = "agradecimentos.html"
}

function cadastro() {
    const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var NomeCliente = document.getElementById("name-id").value
    var EmailCliente = document.getElementById("email-id").value
    var EmailCliente = EmailCliente
    var cadastro = 
        {Nome : NomeCliente,
         Email : EmailCliente};
    console.log(cadastro.Email);
    if (regx.test(cadastro.Email) !== false) {
        window.location = "problema.html"}
    else {
        var valido = document.getElementById("emailvalido")
        valido.style.color = "red";
    }
}
let acao = document.getElementById('acao');

//-!-LocalStorage



const problema = []

var checkboxOmbro = document.getElementById("switch-shadow-ombro")
var checkboxCostas = document.getElementById("switch-shadow-costas")
var checkboxJoelho = document.getElementById("switch-shadow-joelho")


//LocalStorage-!-
var clickombro = 0
var clickjoelho = 0
var clickcostas = 0

function addombro() {
    if(checkboxOmbro.checked) {
    problema.push("Ombro")
    localStorage.setItem("dores", JSON.stringify(problema))
    console.log(localStorage.getItem("dores"))
}else {
    problema.pop()
    localStorage.setItem("dores", JSON.stringify(problema))
    console.log(localStorage.getItem("dores"))
}
if(JSON.parse(localStorage.getItem('dores'))[0] == 'Ombro') {
    acao.addEventListener("click", function() {
        window.location = "ombro.html"

    })
}

if(JSON.parse(localStorage.getItem('dores'))[0] == 'Costas') {
    acao.addEventListener("click", function() {
        window.location = "costas.html"
    })
}

if(JSON.parse(localStorage.getItem('dores'))[0] == 'Joelho') {
    acao.addEventListener("click", function() {
        window.location = "joelho.html"
    })
}
}

function addjoelho() {
    if(checkboxJoelho.checked) {
        problema.push("Joelho")
        localStorage.setItem("dores", JSON.stringify(problema))
        console.log(localStorage.getItem("dores"))
    }else {
        problema.pop()
        localStorage.setItem("dores", JSON.stringify(problema))
        console.log(localStorage.getItem("dores"))
    }
    if(JSON.parse(localStorage.getItem('dores'))[0] == 'Ombro') {
        acao.addEventListener("click", function() {
            window.location = "ombro.html"

        })
    }

    if(JSON.parse(localStorage.getItem('dores'))[0] == 'Costas') {
        acao.addEventListener("click", function() {
            window.location = "costas.html"
        })
    }

    if(JSON.parse(localStorage.getItem('dores'))[0] == 'Joelho') {
        acao.addEventListener("click", function() {
            window.location = "joelho.html"
        })
    }
}

function addcostas() {
    if(checkboxCostas.checked) {
        problema.push("Costas")
        localStorage.setItem("dores", JSON.stringify(problema))
        console.log(localStorage.getItem("dores"))
    }else {
        problema.pop()
        localStorage.setItem("dores", JSON.stringify(problema))
        console.log(localStorage.getItem("dores"))
    }
    if(JSON.parse(localStorage.getItem('dores'))[0] == 'Ombro') {
        acao.addEventListener("click", function() {
            window.location = "ombro.html"

        })
    }

    if(JSON.parse(localStorage.getItem('dores'))[0] == 'Costas') {
        acao.addEventListener("click", function() {
            window.location = "costas.html"
        })
    }

    if(JSON.parse(localStorage.getItem('dores'))[0] == 'Joelho') {
        acao.addEventListener("click", function() {
            window.location = "joelho.html"
        })
    }
}

var dor1 = document.getElementById('dor1')
var dor2 = document.getElementById('dor2')

function x() {
    let leng = problema.length;
    dor1.innerHTML = JSON.parse(localStorage.getItem('dores'))[0] || '';
    dor2.innerHTML = JSON.parse(localStorage.getItem('dores'))[1] || '';
}


let acaoa = document.getElementById("acaoa")



function proxpag2() {
    let dor = window.location.pathname

    if(JSON.parse(localStorage.getItem('dores'))[1] == 'Ombro') {
        acaoa.addEventListener("click", function() {
            window.location = "ombro.html"
        })
    }

    if(JSON.parse(localStorage.getItem('dores'))[1] == 'Costas') {
        acaoa.addEventListener("click", function() {
            window.location = "costas.html"
        })
    }

    if(JSON.parse(localStorage.getItem('dores'))[1] == 'Joelho') {
        acaoa.addEventListener("click", function() {
            window.location = "joelho.html"
        })
}
    if(JSON.parse(localStorage.getItem('dores'))[1] == 'Costas' && dor == '/harmo/harmofit-hub/costas.html') {
        acaoa.addEventListener("click", function() {
        window.location = "avaliacao.html"
    })}

    if(JSON.parse(localStorage.getItem('dores'))[1] == 'Joelho' && dor == '/harmo/harmofit-hub/joelho.html') {
        acaoa.addEventListener("click", function() {
        window.location = "avaliacao.html"
    })}

    if(JSON.parse(localStorage.getItem('dores'))[1] == 'Ombro' && dor == '/harmo/harmofit-hub/ombro.html') {
        acaoa.addEventListener("click", function() {
        window.location = "avaliacao.html"
    })}
}

window.addEventListener('load',() => {
    registerSW()
})

async function registerSW(){
    if("serviceWorker" in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
        } catch(e){
            console.log("sw register failed");
        }
    }
}