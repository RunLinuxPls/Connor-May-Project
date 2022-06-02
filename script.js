// @ts-check
'use strict';
import { SeventySentences } from "./SentencesbyCristianPopescu.js"
import { shuffleArray } from "./Fisher-Yates_shuffle.js"
(function loadTextSnippetsFromJSON(){
    const poem = SeventySentences.body,
        doc = document.querySelector("#appWrapper")
    for (let each of poem) {
        doc.appendChild(document.createElement("div")).appendChild(document.createTextNode(each))
    }
    document.querySelectorAll("#appWrapper div").forEach((each) => {
    each.className = "sentenceCard"
})
})()
shuffleArray(document.querySelectorAll("#appWrapper div"))[0].style.display = "grid";
