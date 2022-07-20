function intentOpenApp(text) {

    // Declaração de palavras chaves para ABRIR websites e aplicativos

    let openKeyword1 = text.toLowerCase().includes('abra');
    let openKeyword2 = text.toLowerCase().includes('abre');
    let openKeyword3 = text.toLowerCase().includes('abrir');

    // Declaração de palavras chaves para FECHAR websites e aplicativos

    let closeKeyword1 = text.toLowerCase().includes('fechar');
    let closeKeyword2 = text.toLowerCase().includes('feche');
    let closeKeyword3 = text.toLowerCase().includes('fecha');

    // Google

    let googleKeyword = text.toLowerCase().includes('google');

    if (openKeyword1 == true && googleKeyword == true || openKeyword2 == true && googleKeyword == true || openKeyword3 == true && googleKeyword == true) {
        startSpeech("Okay, abrindo o Google!");
        newTab = window.open("https://google.com")
    }

    if (closeKeyword1 == true && googleKeyword == true || closeKeyword2 == true && googleKeyword == true || closeKeyword3 == true && googleKeyword == true) {
        startSpeech("Fechando!");
        newTab.close("https://google.com")
    }

    // WhatsApp

    let whatsappKeyword = text.toLowerCase().includes('whatsapp');

    if (openKeyword1 == true && whatsappKeyword == true || openKeyword2 == true && whatsappKeyword == true || openKeyword3 == true && whatsappKeyword == true) {
        startSpeech("Okay, abrindo WhatsApp");
        window.open("https://api.whatsapp.com/")
    }

    // Netflix

    let netflixKeyword = text.toLowerCase().includes('netflix');

    if (openKeyword1 == true && netflixKeyword == true || openKeyword2 == true && netflixKeyword == true || openKeyword3 == true && netflixKeyword == true) {
        startSpeech("Okay, abrindo Nétiflix. Divirta-se!");
        netflix = window.open("https://www.netflix.com/browse")
    }

    if (closeKeyword1 == true && netflixKeyword == true || closeKeyword2 == true && netflixKeyword == true || closeKeyword3 == true && netflixKeyword == true) {
        startSpeech("Okay, fechando!");
        netflix.close()
    }

    // Paramount

    let paramountKeyword = text.toLowerCase().includes('paramount');

    if (openKeyword1 == true && paramountKeyword == true || openKeyword2 == true && paramountKeyword == true || openKeyword3 == true && paramountKeyword == true) {
        startSpeech("Okay, abrindo Paramount. Divirta-se!");
        window.open("https://www.paramountplus.com/")
    }

    // Instagram Dark Theme

    let instagramKeyword = text.toLowerCase().includes('insta');
    let darkTheme = text.toLowerCase().includes('escuro');

    if (openKeyword1 == true && instagramKeyword == true && darkTheme == true || openKeyword2 == true && instagramKeyword == true && darkTheme == true || openKeyword3 == true && instagramKeyword == true && darkTheme == true) {
        startSpeech("Okay, abrindo Instagram com o tema escuro");
        window.open("https://www.instagram.com/?theme=dark")
    }

    // Instagram Light Theme

    if (darkTheme == false) {
        if (openKeyword1 == true && instagramKeyword == true || openKeyword2 == true && instagramKeyword == true || openKeyword3 == true && instagramKeyword == true) {

            startSpeech("Okay, abrindo Instagram");
            window.open("https://www.instagram.com/")
        }
    }

    // YouTube

    let youtubeKeyword = text.toLowerCase().includes('youtube');

    if (openKeyword1 == true && youtubeKeyword == true || openKeyword2 == true && youtubeKeyword == true || openKeyword3 == true && youtubeKeyword == true) {
        startSpeech("Okay, abrindo YouTube. Divirta-se!");
        youtube = window.open("https://www.youtube.com/")
    }

    if (closeKeyword1 == true && youtubeKeyword == true || closeKeyword2 == true && youtubeKeyword == true || closeKeyword3 == true && youtubeKeyword == true) {
        startSpeech("Okay, fechando!");
        youtube.close()
    }

}