const convertMorse = (input, cipher) => {
    // checks which cipher has been passed in by checking the first value
    if (cipher["a"] === ".-") {
        return input
            .split("")
            .map((char) => cipher[char.toLowerCase()]) // lowers the input text to accept both upper and lower case
            .join(" ");
    } else if (cipher[".-"] === "a") {
        return input
            .split(/([\s|])/) // splits morse separated by a whitespace or pipe and captures the delimiter
            .map((morse) => cipher[morse])
            .join("");
    }
};

export default convertMorse;
