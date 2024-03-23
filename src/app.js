/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randomIndexFunction = length => {
    return Math.floor(Math.random() * length);
  };

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const randomExcuse = `${who[randomIndexFunction(who.length)] +
    " " +
    action[randomIndexFunction(action.length)] +
    " " +
    what[randomIndexFunction(what.length)] +
    " " +
    when[randomIndexFunction(when.length)]}`;

  document.getElementById("excuse").innerHTML = randomExcuse;

  console.log("Hello Ringo from the console!");
};
