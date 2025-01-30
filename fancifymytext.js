function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("userText").style.fontSize = "24pt";
}

function fancifyChange() {
    const fancy = document.getElementById("fancyShmancy");
    const textArea = document.getElementById("userText");
    if (fancy.checked) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooify() {
    const textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words[0] !== "") {
            words[words.length - 1] = words[words.length - 1] + "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");
    textArea.value = text;
}
