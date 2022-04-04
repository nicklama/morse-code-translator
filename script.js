import { textToMorseCipher, morseToTextCipher } from "./alphaMorse.js";
import convertMorse from "./convertMorse.js";

const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");
const checkText = document.querySelector("#checkText");
const checkMorse = document.querySelector("#checkMorse");

// Converts text/morse as soon as the textarea detects an input
inputText.addEventListener("input", () => {
    const checkedBtn = document.querySelector("input[name='convertType']:checked");

    // Determines what cipher object to pass in based on the checked button (text or morse code)
    const cipher = checkedBtn.value === "text" ? textToMorseCipher : morseToTextCipher;

    outputText.innerText = convertMorse(inputText.value, cipher);
});

// Input placeholder text changes based on the current checked radio button to inform the user what to type
checkText.addEventListener("click", () => {
    inputText.placeholder = "Enter some text to translate to morse code";
});

checkMorse.addEventListener("click", () => {
    inputText.placeholder =
        "Enter some morse code to translate to text. Separate each letter with a space and words with a pipe - |";
});
