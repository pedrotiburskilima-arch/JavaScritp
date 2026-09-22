const classe = "Mago";

switch (classe) {
    case "Guerreiro":
        console.log("Classe: Guerreiro");
        console.log("O guerreiro e um combatente corpo a corpo, especializado em forca e resistencia.");
        console.log("Habilidades: Ataque poderoso, Defesa solida, Furia de batalha");
        break;
    case "Mago":
        console.log("Classe: Mago");
        console.log("O mago e um conjurador de feiticos, especializado em magia ofensiva e suporte.");
        console.log("Habilidades: Magia de fogo, Magia de gelo, Magia de cura");
        break;
    case "Arqueiro":
        console.log("Classe: Arqueiro");
        console.log("O arqueiro e um atirador de longa distancia, especializado em precisao e agilidade.");
        console.log("Habilidades: Precisao, Agilidade, Tiro com precisao");
        break;
    case "Ladino":
        console.log("Classe: Ladino");
        console.log("O ladino e um especialista em furtividade e trapas, utilizado para sabotagem e espionagem.");
        console.log("Habilidades: Furtividade, Trapas, Assassinio");
        break;
    default:
        console.log("Classe desconhecida. Por favor, escolha entre guerreiro, mago, arqueiro ou ladino.");
}