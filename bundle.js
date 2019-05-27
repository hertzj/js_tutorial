(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("hertzj-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});

},{"hertzj-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds reverse to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// // Checks if a string is a palindrome; returns true if yes, false otherwise
// function palindrome(string) {
//   let processedContent = string.toLowerCase()
//   return processedContent === reverse(processedContent);
// }

// seperates username and domain of an email address
function emailParts(email) {
  let standardEmail = email.toLowerCase()
  return standardEmail.split("@");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return this.letters().toLowerCase();
  }
  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  // Returns the letters in the content
  // For example:
  // new Phrase ("Hello, world!").letters === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }
  // Returns true if the phrase is a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
    }
  // Makes the phrase LOUDER
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}
// Defines a TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();

},{}]},{},[1]);
