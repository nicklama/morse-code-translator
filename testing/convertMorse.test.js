// Requirements
// - should convert text to morse
// - should convert morse to text
// - handle spaces correctly (one space between english words, one space between morse chars, pipe | between morse words)
// - supports capitals, numbers and symbols

import { morseToTextCipher, textToMorseCipher } from "../alphaMorse";
import convertMorse from "../convertMorse";

describe("Testing convertMorse()", () => {
    it("Should convert english text to morse code", () => {
        expect(convertMorse("a", textToMorseCipher)).toBe(".-");
        expect(convertMorse("text", textToMorseCipher)).toBe("- . -..- -");
        expect(convertMorse("sos", textToMorseCipher)).toBe("... --- ...");
    });

    it("Should convert morse code to english text", () => {
        expect(convertMorse(".-", morseToTextCipher)).toBe("a");
        expect(convertMorse("- . -..- -", morseToTextCipher)).toBe("text");
        expect(convertMorse("... --- ...", morseToTextCipher)).toBe("sos");
    });

    it("Should handle spaces correctly for english text and morse code", () => {
        expect(convertMorse("morse code", textToMorseCipher)).toBe(
            "-- --- .-. ... . | -.-. --- -.. .",
        );
        expect(convertMorse(".. - | .-- --- .-. -.- ...", morseToTextCipher)).toBe("it works");
        expect(convertMorse("a b c", textToMorseCipher)).toBe(".- | -... | -.-.");
    });

    it("Should support capitals, numbers and symbols", () => {
        expect(convertMorse("ABC123", textToMorseCipher)).toBe(".- -... -.-. .---- ..--- ...--");
        expect(convertMorse("PI: 3.14!", textToMorseCipher)).toBe(
            ".--. .. ---... | ...-- .-.-.- .---- ....- -.-.--",
        );
        expect(convertMorse("-'dash'?", textToMorseCipher)).toBe(
            "-....- .----. -.. .- ... .... .----. ..--..",
        );
    });
});
