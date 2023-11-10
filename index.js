var personagem = "Juanito";
let experiencia = 0; 

switch (true) {
    case experiencia <= 1000:
        console.log("O héroi de nome " + personagem + " está no nível: Ferro");
        break; 
    case experiencia > 1000 && experiencia <= 2000:
        console.log("O héroi de nome " + personagem + " está no nível: Bronze");
        break;
    case experiencia > 2000 && experiencia <= 5000:
        console.log("O héroi de nome " + personagem + " está no nível: Prata");
        break;
    case experiencia > 6000 && experiencia <= 7000:
        console.log("O héroi de nome " + personagem + " está no nível: Ouro");
        break;
    case experiencia > 7000 && experiencia <= 8000:
        console.log("O héroi de nome " + personagem + " está no nível: Platina");
        break;
    case experiencia > 8000 && experiencia <= 9000:
        console.log("O héroi de nome " + personagem + " está no nível: Ascendente");
        break;
    case experiencia > 9000 && experiencia <= 10000:
        console.log("O héroi de nome " + personagem + " está no nível: Imortal");
        break;
    case experiencia >= 10000:
        console.log("O héroi de nome " + personagem + " está no nível: Radiante");
        break;
    default:
        console.log("Herói iniciando sua jornada agora.");
}