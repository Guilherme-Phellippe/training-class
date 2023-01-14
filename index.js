import { Carro } from "./veiculo.js";

//instaciando o objeto carro
const meuCarro = new Carro("VW", "Gol G3", 2000);

//iniciando as variavéis necessarias
const btns = {
    power: document.querySelector("button.on-off"),
    speed: document.querySelector("button.speed"),
    up: document.querySelector("button.up"),
    down: document.querySelector("button.down"),
}
const panel = {
    statusCar: document.querySelector(".status-car h2"),
    marcha: document.querySelector("div.car-marcha h2"),
}

//funcão ligar/desligar o carro
btns.power.addEventListener("click", ()=>{
    const isOff = btns.power.textContent == "Desligar carro" ? true : false
    const response = isOff ? meuCarro.girarChave("esquerda") : meuCarro.girarChave("direita");

    btns.speed.disabled = isOff ? true : false;
    btns.up.disabled = isOff ? true : false
    btns.down.disabled = isOff ? true : false
    btns.power.textContent = isOff ? "Ligar o carro" : "Desligar carro";
    panel.statusCar.textContent = response
});

//função para acelerar o carro
btns.speed.addEventListener("click", ()=>{
    const response = meuCarro.acelerar();
    if(btns.power.textContent == "Desligar carro"){
        panel.statusCar.textContent = response
        setTimeout(()=>{
            panel.statusCar.textContent = meuCarro.girarChave("direita")
        },2000);
    }
});

//função para aumentar de marcha
btns.up.addEventListener("click", ()=>{
    const response = meuCarro.trocarMarcha(true);
    panel.marcha.textContent = "Carro está de "+response+"°"
})

//função para diminuir a marcha
btns.down.addEventListener("click", ()=>{
    const response = meuCarro.trocarMarcha(false);
    panel.marcha.textContent = "Carro está de "+response+"°"
})