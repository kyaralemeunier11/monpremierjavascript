// LES EVENEMENTS

// Evenement appelé change

// 1. Récuperer l'élément qui contient <input type="text" id="nom">

const elementInputNom = document.querySelector("#nom");

// 2. Ecouter l'évenement change, puis éxecuter le code
elementInputNom.addEventListener("change", ()=>{
    console.log("==== J'ai entendu change");
})

const elementInputPrenom = document.querySelector("#prenom");

let messageSalutation;
const elementMessageSalutation = document.querySelector("#messageSalutation");
elementInputPrenom.addEventListener("change", (event)=>{
    console.log("Le changement est : ", event.target.value);
    messageSalutation = `Bonjour, ${event.target.value}`;
    elementMessageSalutation.textContent = messageSalutation;
})

// Jeu d'heure
const date = new Date();

console.log("heure", date.getHours());