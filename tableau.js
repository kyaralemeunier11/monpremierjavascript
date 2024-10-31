// LES TABLEAUX

let monTableau = ["Said", "Amina", "Bao"];

// Afficher les éléments du tableau monTableau
console.log(monTableau[0]); 

// Déclare objet 'client'
let client = {
    nom: "Ali",
    prenom: "Yanis",
    numeroClient: 111,
    adresse: "12 rue de la vie - Mayotte",
    celibataire: false
}

console.log("Mon client s'appelle: ", client.nom, client.prenom);

// Besoinn client!!!!
const elementSituation = document.querySelectorAll('input [name = "situation"]');
   console.log(elementSituation);
   console.log(elementSituation[0].checked);
   console.log(elementSituation[1].checked);
   console.log(elementSituation[1].checked).value;
   let situationCochee
   for(let i = 0; i < elementSituation.length; i++){
    console.log()
    console.log(elementSituation[i].checked);

    if(elementSituation[i].checked){
        console.log(elementSituation[i].value);
        situationCochee = elementSituation[1].value
       }
   }