function check(textResult) {

    let sarahKeyword = textResult.toLowerCase().includes('sara');
    if (sarahKeyword == true) {
        piadas(textResult);
        saudacao(textResult);
    }

    if (verification == true) {
        intentOpenApp(textResult);
    }
}