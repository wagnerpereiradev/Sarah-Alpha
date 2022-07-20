function saudacao(text) {
    var saudacaoFormal = [
        "Olá, como vai?",
        "Oi, como vai?",
        "Oi, como está? Espero que bem",
        "Olá, tudo bem?",
        "Olá, como você está?",
        "Oi, como você está?"
    ];

    var saudacaoInformal = [
        "E aí, como vai?",
        "E aí, tudo bem com você?",
        "Salve, suave por aí?",
        "Opa, tudo certo?",
        "E aí, beleza?"
    ];

    var saudacaoContraRespostaComum = [
        "Estou bem e você?",
        "Tudo ótimo, e com você?",
        "Estou ótima, e você?",
        "Melhor agora, e você?"
    ]

    var saudacaoContraRespostaSystem = [
        "Por aqui tudo funcionando!",
        "Sistemas okay, tudo funcionando!",
        "Fiz uma varredura no meu sistema e está tudo okay!",
        "Sistemas neurais funcionando, é por isso que você escuta o que eu digo"
    ]

    let saudacao0 = text.toLowerCase().includes('oi');
    let saudacao1 = text.toLowerCase().includes('olá');
    let saudacaoEscolhida = saudacaoFormal[Math.floor(Math.random() * saudacaoFormal.length)];

    if (saudacao0 == true || saudacao1 == true) {
        startSpeech(saudacaoEscolhida);
    }

    let saudacaoInformal0 = text.toLowerCase().includes('salve');
    let saudacaoInformal1 = text.toLowerCase().includes('e aí');
    let saudacaoInformalEscolhida = saudacaoInformal[Math.floor(Math.random() * saudacaoInformal.length)];

    if (saudacaoInformal0 == true || saudacaoInformal1 == true) {
        startSpeech(saudacaoInformalEscolhida);
    }

    let saudacaoSystem0 = text.toLowerCase().includes('tudo bem');
    let saudacaoSystem1 = text.toLowerCase().includes('como você está');
    let saudacaoSystemEscolhida = saudacaoContraRespostaSystem[Math.floor(Math.random() * saudacaoContraRespostaSystem.length)];

    if (saudacaoSystem0 == true || saudacaoSystem1 == true) {
        startSpeech(saudacaoSystemEscolhida);
    }
}
