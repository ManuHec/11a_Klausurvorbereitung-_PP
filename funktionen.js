/* DATENSTRUKTUREN */

/* Primitives */ // einfache Variablen

// let a // var, const (Variablen bestimmen) definition ode deklaration

// // Wertzuweisung / Assignmen

// a = true; //(boolean true, false)
// a = "Hallo" // String
// a = 2; // number

// console.log(a); // ausgabe
// console.log(typeof a); // datentype herrausfinden

//undefined - varible gibt es aber ist noch nicht bestimmt

//Arrays

// let arr;
// arr = new Array();
// arr = []; // klausur
// arr = [false,true,false,true];

// Index beginnt mit 0

//  console.log(arr[0]); // ein bestimmte position beim arr ausgeben (das erste)
//  console.log(arr[3]);// das letzte 
//  console.log(arr.length); // zeigt an wie lang
//  console.log(arr[arr.length-1]); // andere schreibweise bei längere arr

// bei arr mit let push hägt man was raan und ,it pop löscht man wieder

// Objekte

let obj = {}; // leeres Objekt
opj = { x: 10, y: "Hallo" };

// console.log(opj);
// console.log(obj.x);// Dot- Sysntax

// obj = {
//     va10: 10,
//     sub1:{
//             val1: "hi",
//             val:2,
//     }
// }
//  console.log(obj);
//  console.log(obj.va10);
//  console.log(obj.val10.val1);
//  console.log(obj.sub1.val1);
//  console.log(obj.sub1.val2);
// {{{{{{{.....}}}}}}} --> Nested object

// DOM --> Modell der HTML - Struktur
//DOM --> Document Object Model
// Dom --> nach dem Parsen / Laden der HTML - Seite

// console.log(document); // zeigt die ganze struktur an
// console.log(document.body);// zeigt nur den body an
// console.log(document.body.children);// gibt die kinder an
// console.log(document.body.children[0]); // zeigt die Überschrift an
// console.log(document.body.children[0].innerHTML); // zeigt die Überschift in Text an 
// document.body.children[0].innerText = "Hi"; // Überschift ändern
// console.log(document.getElementById("test"));
// document.getElementById("test").innerHTML ="Hallo Text";

// Entscheidungsstrukturen | Control Flow

// let cond;
// cond = true;
// cond = ( 6 > 4 ); // gibt an ob ddie aussage richtig oder falsch ist
// cond = ( 6 < 4 );
// cond = ( 4 == 4 ); // gleichheit immer mit 2 == // Test auf wert 
// cond = ( 4 === "4" ); // Test auf wert UND type
// console.log(cond);

// if (cond) {
//     console.log("Aussage wahr");
// } else {
//     console.log("Aussage falsch");
// }


//  switch (key) {
//      case value:

//          break;

//      default:
//          break;
//  }

// FUNKTIONEN - braucht einen Cal

//1. Kapselung
//test(); - Call
// function name() { // Fkt. - Rumpf
//     console.log("Testausgabe");
// }

// 2. return

// console.log(test());
// function name() { // Fkt. - Rumpf
//     return "Testausgabe" // Lieferung an die Stelle des calls
// }

// 3. Parameter

// console.log(test("Milda"));
// function test(firstName) { // Fkt. - Rumpf
//      return "Hallo " + firstName // Lieferung an die Stelle des calls
//  }

// 4. Fkt - Call aus Funktionen
// console.log(test("Ernesto"));
// function test(firstname) {

//     let ausgabe = grussformel() + firstname + "!";
//      return ausgabe;
// }
// function grussformel() {
//     return "Hola, ";
//     // return "Hello"

// } 
//rechner