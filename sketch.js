function geraRecomendacao(idade, gostaDejogos) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "O menino que descobriu o vento";
        } else {
            if (gostaDejogosdeação) {
                return "free fire ";
            } else {
                return "Fortnite";
            }
        }
    } else {
        if (gostaDejogosdeaventura) {
            return "Terra Perdida";
        } else {
            return "A Viagem Infinita";
        }
    }
}
function setup() {
    createCanvas(800, 400);
    campoIdade = createInput("5");
    campoFantasia = createCheckbox("Gosta de jogos?");
}
function setup() {
    createCanvas(800, 400);

    // 🔵 Texto para informar ao usuário
    createSpan("Sua idade: ");
    campoIdade = createInput("5");

    // 🔵 Checkbox com descrição clara
    campoFantasia = createCheckbox(" Gosta de jogos?");
}
function draw() {
    background("white"); // ⚪ Fundo branco
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115)); // 🟣 Cor do texto (roxo escuro)
    textAlign(CENTER, CENTER); // 🎯 Alinhamento centralizado
    textSize(38); // 🔠 Tamanho maior para boa leitura

    text(recomendacao, width / 2, height / 2); // 📍 Texto exibido no centro
}



