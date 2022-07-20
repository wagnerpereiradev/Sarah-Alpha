setTimeout(msgChange, 500)

function msgChange() {
    setInterval(messagesPulse, 10000);
}

const messages = [
    "\"Sarah, abra o Netflix\"",
    "\"Sarah, abra o WhatsApp\"",
    "\"Sarah, abra o Instagram\"",
    "\"Sarah, abra o Instagram no modo escuro\"",
    "\"Sarah, conte uma piada\"",
    "\"Sarah, como você está?\"",
    "Sarah from Septem Dev"
];

function messagesPulse() {
    var outputText = document.querySelector("#output_text");
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    outputText.innerHTML = (randomMessage);
};
