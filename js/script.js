// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let date = new Date();
console.log(date);

//Stocker l'heure , minute , seconde  dans des varaiables
let heure = date.getHours();
console.log(heure);

let minute = date.getMinutes();
console.log(minute);

let seconde = date.getSeconds();
console.log(seconde);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let heureD = ((heure * 3600) * (360/43200));
console.log(heureD);

let minuteD = ((minute * 60) * 0.1);
console.log(minuteD);

let secondeD = ((seconde * 6));
console.log(secondeD);

// Déplacer les aiguilles 
function demarrerLaMontre(){

    //--- Calculs Correspondant ---//

    //(3600*12) 43200 = 360° => 
                            // 360/43200 = 0.008°
    // -------    1   =  ? =>
    heureD = heureD + (360/43200);

    // 3600 = 360° => 
                    // 360/3600 = 0.1°
    // 1     =  ?   =>
    minuteD = minuteD + 0.1;

    //60 = 360° =>
                // 360/60 = 6°
    // 1 =  ? ² =>
    secondeD = secondeD + 6;

    AIGUILLEHR.style.transform = `rotate(${heureD}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${minuteD}deg)`;
    AIGUILLESEC.style.transform = `rotate(${secondeD}deg)`;
}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);