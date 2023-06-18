

//Funzione per la creazione degli elementi tramite manipolazione del DOM
function create(divValue, element, sign, value, attribute)
{
  const CONTAINER = document.getElementById(divValue);
  const NEW_ELEMENT = document.createElement(element);
 
NEW_ELEMENT.textContent =sign;
CONTAINER.appendChild(NEW_ELEMENT);
NEW_ELEMENT.classList.toggle(value);
NEW_ELEMENT.id = (attribute);
return NEW_ELEMENT;
}

//richiamata la funzione di creazione per tutti gli elementi
const HEAD = create("counter", "header", "", "head", "header");
const TITLE = create("header", "h1", "Il Mio Contatore Con Javascript");
const T_BODY = create("counter", "div", "", "tBody", "tBody");

const SUBTITLE = create("tBody", "h2", "Clicca - per diminuire o + per aumentare", "subtitle", "");
const COUNTER = create("tBody", "div", "", "count", "count");

const pCounter = create("count", "p", "0", "pClass", "");
const L_BODY = create("tBody", "div", "", "lBody", "lBody");

const DIV_MINUS =create("lBody", "div", "", "divMinus", "divMinus");

const DIV_PLUS =create("lBody", "div", "", "divPlus", "divPlus");

const DEC_BTN = create("divMinus", "button", "-", "minus", "");
const INC_BTN = create("divPlus", "button", "+", "plus", "" );


const buttonBox = document.getElementById("lBody"); //costante del div dove avviene il click

let counter = 0; //costante del contatore

//funzione per incremento e decremento del contatore
function target(e) {
  if(e.target === INC_BTN) {
    counter++;
  } else if(e.target === DEC_BTN) {
    counter--;
  } else {
    counter = 0;
   }
   pCounter.innerHTML = counter;
}
buttonBox.addEventListener("click", target);


