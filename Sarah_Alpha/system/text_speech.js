let voiceOptions = 'Microsoft Server Speech Text to Speech Voice (pt-BR, FranciscaNeural)';
let speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

function startSpeech(message) {
    resetAll();
    speechConfig.speechSynthesisVoiceName = voiceOptions;
    synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig);
    let inputText = message;
    synthesizer.speakTextAsync(inputText);
}

function resetAll() {
    stopInvocation();
    verificationFalse();
    setTimeout(verificationReset, 1000);
    setTimeout(startInvocation, 1500);
}

