// @ts-check
'use strict';
import { SeventySentences } from "./SentencesbyCristianPopescu.js"
import { shuffleArray } from "./Fisher-Yates_shuffle.js"
function loadTextSnippetsFromJSON() {
    const poemArray = SeventySentences.body,
        appWrapper = document.querySelector("#appWrapper")
    poemArray.forEach((each) => { appWrapper.appendChild(document.createElement("p")).appendChild(document.createTextNode(each)) })
    document.querySelectorAll("#appWrapper p").forEach((each) => { each.className = "sentenceCard" })
}
loadTextSnippetsFromJSON()
let shuffledElementsArray = shuffleArray([...document.querySelectorAll("#appWrapper p")])
let currentIndex = 0
document.querySelectorAll("#appWrapper p").forEach((each) => { each.style.display = "none" })
shuffledElementsArray[currentIndex].style.display = "grid"
document.querySelector("#nextCard").onclick = () => {
    shuffledElementsArray[currentIndex].style.display = "none"
    currentIndex ++
    shuffledElementsArray[currentIndex].style.display = "grid"
}