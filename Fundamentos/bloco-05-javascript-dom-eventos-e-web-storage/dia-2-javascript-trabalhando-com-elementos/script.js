/*Acesse o elemento elementoOndeVoceEsta .*/
const elemento = document.querySelector("#elementoOndeVoceEsta");
// console.log(elemento)
/*Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele*/
elemento.parentNode.parentNode.style.color = ("red");

/*Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?*/

elemento.firstElementChild.innerHTML = "Adicionado um texto que pede no quesito 3.";

/*Acesse o primeiroFilho a partir de pai .*/
const elementoPai = document.querySelector("#pai").firstElementChild;
// console.log(elementoPai);
/*Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .*/
elemento.previousElementSibling;
/*Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .*/
elemento.nextSibling;
/*Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .*/
console.log(elemento.nextElementSibling)
/*Agora acesse o terceiroFilho a partir de pai .*/
console.log(elementoPai.nextElementSibling.nextElementSibling);

/* Dia 5.2
Crie um irmão para elementoOndeVoceEsta .*/
let elementoIrmao = document.createElement("section");
elementoIrmao.innerText = "elementoIrmao";
document.querySelector("#pai").appendChild(elementoIrmao);
console.log(elementoIrmao);

