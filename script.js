const translateBtn = document.querySelector("#translateBtn");
const inputText = document.querySelector("#inputText");
const outputText = document.querySelector("#outputText");
const morseForm = document.querySelector("#morseForm");
const checkText = document.querySelector("#checkText");
const checkMorse = document.querySelector("#checkMorse");

const convertMorse = (input, inputType) => {
    let morseArr = [];
    const textToMorseCipher = {
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
        " ": "|",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        0: "-----",
    };

    if (inputType === "text") {
        morseArr = input
            .split("")
            .map((char) => textToMorseCipher[char])
            .join(" ");
    } else if (inputType === "morse") {
        const morseToTextCipher = Object.entries(textToMorseCipher).reduce((acc, [key, value]) => {
            acc[value] = key;
            return acc;
        }, {});
        morseArr = input
            .split(/([\s|])/)
            .map((morse) => morseToTextCipher[morse])
            .join("");
        // console.log(input.split(/\s|(\|)/));
        // console.log(input.split(/([\s|])/).map((char) => morseToTextCipher[char]));
    }

    return morseArr;
};

// translateBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     morseForm.reportValidity();

//     const checkedBtn = document.querySelector("input[name='convertType']:checked");

//     outputText.innerText = convertMorse(inputText.value, checkedBtn.value);
// });

inputText.addEventListener("input", () => {
    morseForm.reportValidity();

    const checkedBtn = document.querySelector("input[name='convertType']:checked");

    outputText.innerText = convertMorse(inputText.value, checkedBtn.value);
});

checkText.addEventListener("click", () => {
    inputText.placeholder = "Enter some text to translate to morse code";
});

checkMorse.addEventListener("click", () => {
    inputText.placeholder =
        "Enter some morse code to translate to text. Separate each letter with a space and words with a pipe - |";
});
