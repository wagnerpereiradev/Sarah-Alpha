function piadas(keyword) {
    const piadas = [
        "Porque o menino estava falando ao telefone deitado? Para não cair a ligação.",
        "Por que a planta não responde? Porque ela é mudinha.",
        "Qual a fruta que anda de trem? O kiwi.",
        "O que é um astrólogo andando a cavalo? Um Cavaleiro do Zodíaco.",
        "O que um cromossomo falou para o outro? Cromossomos bonitos!",
        "O que é um pontinho preto no avião? Uma aeromosca.",
        "Como que o mineiro usa a internet? Pelo UAI-fai.",
        "Qual é a galinha que cai no chão e surta ? A galinha cai i pira.",
        "Como o Batman faz para entrar na Bat caverna ? Ele bat-palma.",
        "Qual é a diferença do lago e da padaria? No lago há sapinho e na padaria assa pão.",
        "O que é que a televisão foi fazer no dentista ? Tratamento de canal.",
        "Por que os fantasmas são péssimos para contar mentiras? Porque são transparentes.",
        "Por que a plantinha não foi atendida no hospital? Porque só tinha médico de plantão.",
        "Se você está se sentindo sozinho, abandonado, achando que ninguém liga para você... Atrase um pagamento.",
        "O que a Lua disse ao Sol? Nossa, você é tão grande e ainda não te deixam sair à noite!",
        "O que um cromossomo falou para o outro? Cromossomos bonitos!",
        "Você sabe por que a água foi presa? Porque ela matou a sede.",
        "Qual a cidade brasileira que não tem táxi? Uberlândia.",
        "Qual o contrário de papelada? Pá vestida.",
        "Contei uma piada química... não teve reação.",
        "Se o cachorro tivesse religião, qual seria? Cão-domblé",
        "O que o tomate foi fazer no banco? Foi tirar extrato.",
        "Qual é a parte do computador preferida dos astronautas? A barra de espaço."
    ];

    let piadaKeyword = keyword.toLowerCase().includes('piada');
    let piadaEscolhida = piadas[Math.floor(Math.random() * piadas.length)];

    if (piadaKeyword == true) {
        startSpeech(piadaEscolhida);
    }
}