// @ts-check
'use strict';
import { SeventySentences } from "./SentencesbyCristianPopescu.js"
    const poem = SeventySentences.body,
    doc = document.querySelector("#appWrapper")
for (const each of poem) {
    doc.appendChild(document.createElement("div")).appendChild(document.createTextNode(each))
}
document.querySelectorAll("#appWrapper div").forEach(element => {
element.className = "sentenceCard"
element.style.display = none;

})