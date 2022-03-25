/* eslint-disable */
import { defaultModifiers } from "@popperjs/core/lib/popper-lite";
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here
  document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("name").innerHTML = domaingenerator();
  });
  console.log("Hello Rigo from the console!");
};

var domaingenerator = () => {
  let pron = ["the", "our", "one", "some", "A"];
  let adj = ["big", "great", "strong", "amazing", "lucky", "hateful"];
  let noun = ["sim", "beast", "bird", "racoon", "condicion", "dwarf", "daddy"];
  let ext = ["com", "es", "io", "net"];

  let ranPron = Math.floor(Math.random() * pron.length);
  let ranAdj = Math.floor(Math.random() * adj.length);
  let ranNoun = Math.floor(Math.random() * noun.length);
  let ranExt = Math.floor(Math.random() * ext.length);

  let dominio = pron[ranPron] + adj[ranAdj] + noun[ranNoun];
  console.log(dominio);

  let final;

  for (let i = 0; i < dominio.length; i++) {
    if (dominio.length - 1 == "n") {
      final = dominio + ".es";
    } else if (dominio.length - 1 == "m") {
      final = dominio + ".io";
    } else {
      URL;
    }
  }

  let URL = dominio + "." + ext[ranExt];
  return URL;
};

console.log(domaingenerator);
