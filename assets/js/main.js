//richiesta al cliente dei km che intende percorrere
var km = Number(prompt("quanti Kilometri vuoi percorrere?"));

//richiesta al cliente della età anagrafica
var  yearsOld = Number(prompt("quanti anni hai?"));

// definizione del costo kilometrico
var costoKm = (km * 21) / 100;
//  console.log(costoKm);

 //istruzioni condizionali
var priceOver = (costoKm / 100) * 40 ;
var priceUnder = (costoKm / 100) * 20;
// console.log(priceUnder);
 // scontistica 
 if (yearsOld >= 65) {
     document.getElementById("costo").innerHTML = (costoKm - priceOver).toFixed(2) + "€";
 } else if (yearsOld < 18) {
     document.getElementById("costo").innerHTML = (costoKm - priceUnder).toFixed(2) + "€";
 } else {
     document.getElementById("costo").innerHTML = costoKm.toFixed(2) + "€";
 }