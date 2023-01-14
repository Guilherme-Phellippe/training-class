// class veiculo 
class Veiculo {
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
    }
}


// class carro extendendo o veiculo
export class Carro extends Veiculo{
    constructor(marca, modelo, ano){
        super(marca, ano);
        this.modelo = modelo;
        this.marcha = 0;
    };

    girarChave(type){
        return type == "direita" ? "Carro está ligado..." : "Carro está desligado"
    }

    acelerar(){
        return "Acelerando..."
    }

    trocarMarcha(isUp){
        return isUp ? this.marcha != 5 ? ++this.marcha : 5 : this.marcha != 0 ? --this.marcha : 0
    }
}

