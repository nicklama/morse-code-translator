# Morse Code Translator

## Introduction

The Morse Code Translator was built to utilise JavaScript and DOM skills to create a fully functioning converter between English and Morse Code. The program also handles numbers and symbols such as {. , : ? !}.

![image](https://user-images.githubusercontent.com/100544978/161508937-6747b4eb-a83e-4289-9e5c-fea25ca53c13.png)

## Implementation

I started this project by researching online for a Morse Code cipher object to use in my program and then I worked on the logic of the translator by creating the main function which handles this. After that, I added some SCSS styling to make the page more appealing as well as cursive font to seem old-fashioned.

Initially, I had a button to translate the inputted text but I later remodelled this to automatically translate as the user typed which I felt was more intuitive. After receiving inital feedback on the project, I broke down the JavaScript to a few separate files to make the code neater and easier to maintain.

## Requirements

### MVP

-   [x] Create an interface that allows the user to input either English text or Morse Code.
-   [x] Create JS functions that allows the user to translate their English text into Morse Code or Morse Code into English text.
-   [x] Ensure that spaces are handled properly (i.e. there is one space between English words, but one space between Morse Code characters).

### Added Features

-   [x] Also supports translation of numbers and some symbols
-   [x] Translates instantaneously

## Future of the Project

To extend this project, I could implement some unit testing to ensure that my converter function handles all edge cases and throws an error if given an incorrect input.

Another feature that I would like to add is a button that outputs the audio of the converted Morse Code to simulate noises emitted by a real Morse Code telegraph.

## Resources

[Fractionated Morse Cipher](http://practicalcryptography.com/ciphers/fractionated-morse-cipher/)
