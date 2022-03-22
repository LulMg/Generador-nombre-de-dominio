/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#name").innerHTML = domaingenerator();
  });
  console.log("Hello Rigo from the console!");
};

var domaingenerator = () => {
  var pron = ["the", "our", "one", "some", "A"];
  var adj = ["big", "great", "strong", "amazing", "lucky", "hateful"];
  var noun = ["guy", "beast", "bird", "racoon", "fish", "dwarf", "daddy"];

  var indexpron = Math.floor(Math.random() * pron.length);
  var indexadj = Math.floor(Math.random() * adj.length);
  var indexnoun = Math.floor(Math.random() * noun.length);

  let domName = pron[indexpron] + adj[indexadj] + noun[indexnoun];
  return domName;
};
