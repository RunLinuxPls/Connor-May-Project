// @ts-check
'use strict';
import { SeventySentences } from "./SentencesbyCristianPopescu.js"
import { shuffleArray } from "./Fisher-Yates_shuffle.js"

(function loadTextSnippetsFromJSON()
{
    const poemArray = SeventySentences.body,
        cardWrapper = document.querySelector("#cardWrapper")
    poemArray.forEach((each) => { cardWrapper.appendChild(document.createElement("p")).appendChild(document.createTextNode(each)) })
    document.querySelectorAll("#cardWrapper p").forEach((each) => { each.className = "sentenceCard" })
})()
let shuffledElementsArray = shuffleArray([...document.querySelectorAll("#cardWrapper p")]) // Init static nodeList, shuffle, init array
let currentIndex = 0
document.querySelectorAll("#cardWrapper p").forEach((each) => { each.style.display = "none" }); // Hide all the cards
shuffledElementsArray[currentIndex].style.display = "grid"; // Display the first card

document.querySelector("#nextCard").onclick = () =>
{
    if (currentIndex < shuffledElementsArray.length - 1) {
        shuffledElementsArray[currentIndex].style.display = "none"
        currentIndex++
        shuffledElementsArray[currentIndex].style.display = "grid"
    }
    else if (currentIndex === shuffledElementsArray.length - 1) {
        shuffledElementsArray[currentIndex].style.display = "none"
        currentIndex = 0
        shuffledElementsArray[currentIndex].style.display = "grid"
    }
}

document.querySelector("#previousCard").onclick = () =>
{
    if (currentIndex > 0) {
        shuffledElementsArray[currentIndex].style.display = "none"
        currentIndex--
        shuffledElementsArray[currentIndex].style.display = "grid"
    }
    else if (currentIndex === 0) {
        shuffledElementsArray[currentIndex].style.display = "none"
        currentIndex = shuffledElementsArray.length - 1
        shuffledElementsArray[currentIndex].style.display = "grid"
    }
}