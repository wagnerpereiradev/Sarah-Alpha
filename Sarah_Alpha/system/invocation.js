/* Get the Subscription Key Azure Portal */

let subscriptionKey = prompt("Subscription Key Azure Here");
let serviceRegion = 'brazilsouth';

/* Verification */

let verification = true;

function verificationReset() {
    verification = true;
}

function verificationFalse() {
    verification = false;
}

window.onload = function () {
    var context = new AudioContext();
    // Setup all nodes
    // ...
}

/* Speech Recognizer */

function startInvocation() {
    var speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    speechConfig.speechRecognitionLanguage = "pt-BR";
    var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    reco = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
    reco.startContinuousRecognitionAsync();
    reco.recognizing = onRecognized;
};

function onRecognized(sender, recognitionEventArgs) {
    let resulta = recognitionEventArgs.result.text;
    check(resulta);
    console.log(resulta)
}

startInvocation();

function stopInvocation() {
    reco.stopContinuousRecognitionAsync();
}

