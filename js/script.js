function diminuir() {
    document.getElementById("demo").style.fontSize = "";
}
function aumentar() {
    document.getElementById("demo").style.fontSize = "35px";
}

function desligar() {
    document.getElementById("lampada").src = "img/apagada.png";
    document.getElementById("clima").style.boxShadow = "";
    document.getElementById("clima2").style.boxShadow = "";
    document.getElementById("zoomOut").style.boxShadow = "";
    document.getElementById("zoomIn").style.boxShadow = "";
    document.getElementById("btnDesligar").style.boxShadow = "";
    document.getElementById("btnLigar").style.boxShadow = "";
    document.getElementById("btnChuva").style.boxShadow = "";
    document.getElementById("btnSol").style.boxShadow = "";
}

function ligar() {
    document.getElementById("lampada").src = "img/acessa.png";
    document.getElementById("clima").style.boxShadow = "2px 10px 15px rgba(0, 0, 0, 0.5)";
    document.getElementById("clima2").style.boxShadow = "7px 10px 15px rgba(0, 0, 0, 0.5)";
    document.getElementById("zoomOut").style.boxShadow = "-3px -5px 10px rgba(0, 0, 0, 0.5)";
    document.getElementById("zoomIn").style.boxShadow = "-1px -5px 10px rgba(0, 0, 0, 0.5)";
    document.getElementById("btnDesligar").style.boxShadow = "-5px 2px 10px rgba(0, 0, 0, 0.8)";
    document.getElementById("btnLigar").style.boxShadow = "5px 2px 10px rgba(0, 0, 0, 0.8)";
    document.getElementById("btnChuva").style.boxShadow = "-1px 5px 10px rgba(0, 0, 0, 0.5)";
    document.getElementById("btnSol").style.boxShadow = "2px 5px 10px rgba(0, 0, 0, 0.5)";
}

function chuva() {
    document.getElementById("clima").src = "img/chuvoso1.png";
    document.getElementById("clima2").src = "img/chuvoso2.png";
    document.getElementById("body").style.backgroundColor = "grey"; 
}

function sol() {
    document.getElementById("clima").src = "img/ensolarado1.png";
    document.getElementById("clima2").src = "img/ensolarado2.png";
    document.getElementById("body").style.backgroundColor = "#ecec53";
}