//recuperiamo la lampadina
const lampadina = document.getElementById("lampadina");
// Recuperiamo il campo input e il bottone
const input = document.getElementById("testo-input");
const inviaButton = document.getElementById("invia-button");

//salviamo il colore originale della lampadina
const coloreOriginale = getComputedStyle(lampadina).backgroundColor;


inviaButton.addEventListener("click", async () => {
    //per recuperare il valore inserito nell'imput
    let valoreInserito = input.value; 
    //dividiamo la stringa in un elemnto per carattere
    const arrayCaratteri = valoreInserito.split("");
    
    input.value = '';
    
    for(carattere of arrayCaratteri){
        if(carattere == "a"){
            await A();
        } else if(carattere == "b") {
            await B();
        } else if(carattere == "c") {
            await C();
        } else if(carattere == "d") {
            await D();
        } else if(carattere == "e") {
            await E();
        } else if(carattere == "f") {
            await F();
        } else if(carattere == "g") {
            await G();
        } else if(carattere == "h") {
            await H();
        } else if(carattere == "i") {
            await I();
        } else if(carattere == "j") {
            await J();
        } else if(carattere == "k") {
            await K();
        } else if(carattere == "i") {
            await I();
        } else if(carattere == "l") {
            await L();
        } else if(carattere == "m") {
            await M();
        } else if(carattere == "n") {
            await N();
        } else if(carattere == "o") {
            await O();
        } else if(carattere == "p") {
            await P();
        } else if(carattere == "q") {
            await Q();
        } else if(carattere == "r") {
            await R();
        } else if(carattere == "s") {
            await S();
        } else if(carattere == "t") {
            await T();
        } else if(carattere == "u") {
            await U();
        } else if(carattere == "v") {
            await V();
        } else if(carattere == "w") {
            await W();
        } else if(carattere == "x") {
            await X();
        } else if(carattere == "y") {
            await Y();
        } else if(carattere == "z") {
            await Z();
        } else if(carattere == ".") {
            await dott();
        } else if(carattere == ",") {
            await virgola();
        } else if(carattere == "?") {
            await puntoDiDomanda();
        } else if(carattere == "1") {
            await uno();
        } else if(carattere == "2") {
            await due();
        } else if(carattere == "3") {
            await tre();
        } else if(carattere == "4") {
            await quattro();
        } else if(carattere == "5") {
            await cinque();
        } else if(carattere == "6") {
            await sei();
        } else if(carattere == "7") {
            await sette();
        } else if(carattere == "8") {
            await otto();
        } else if(carattere == "9") {
            await nove();
        } else if(carattere == "0") {
            await zero();
        } else {
            await spazioParola();
            await intermezzo();
        }

        if(carattere != " "){
            await spazioLettera();
            await intermezzo();
        }
    }
  });





function linea(durata=1000){
    // Cambia colore in rosso
    lampadina.style.backgroundColor = "red";
    lampadina.style.boxShadow = `0 0 30px 10px red`;
    //definisce il tempo di escuzione
    return new Promise(resolve => setTimeout(resolve, durata));
}

function punto(durata = 500) {
    // Cambia colore in rosso
    lampadina.style.backgroundColor = "red";
    lampadina.style.boxShadow = `0 0 30px 10px red`;
    //definisce il tempo di escuzione
    return new Promise(resolve => setTimeout(resolve, durata));
}

function intermezzo(durata=500){
    // Cambia colore nel colore originale
    lampadina.style.backgroundColor = coloreOriginale;
    lampadina.style.boxShadow = "none";
    //definisce il tempo di escuzione
    return new Promise(resolve => setTimeout(resolve, durata));
}

function spazioLettera(durata = 500) {
    // Cambia colore in rosso
    lampadina.style.backgroundColor = "yellow";
    lampadina.style.boxShadow = `0 0 30px 10px yellow`;
    //definisce il tempo di escuzione
    return new Promise(resolve => setTimeout(resolve, durata));
}

function spazioParola(durata = 500) {
    // Cambia colore in rosso
    lampadina.style.backgroundColor = "rgb(82, 250, 115)";
    lampadina.style.boxShadow = `0 0 30px 10px rgb(82, 250, 115)`;
    //definisce il tempo di escuzione
    return new Promise(resolve => setTimeout(resolve, durata));
}

async function A() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function B() {
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function C(){
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
};

async function D() {
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function E() {
    await punto();
    await intermezzo();
}

async function F() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function G() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function H() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function I() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function J() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function K() {
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function L() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function M() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function N() {
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function O() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function P() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function Q() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function R() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function S() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function T() {
    await linea();
    await intermezzo();
}

async function U() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function V() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function W() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function X() {
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function Y() {
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function Z() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function dott() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function virgola() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function puntoDiDomanda() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function uno() {
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function due() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function tre() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function quattro() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await linea();
    await intermezzo();
}

async function cinque() {
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function sei() {
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function sette() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function otto() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function nove() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await punto();
    await intermezzo();
}

async function zero() {
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
    await linea();
    await intermezzo();
}
