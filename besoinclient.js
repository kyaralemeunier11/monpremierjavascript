let prenomUtilisateur = document.querySelector("#prenom");

let anneeNaissance = document.querySelector("#age");

let nomUtilisateur = document.querySelector("#nom");

let elementBoutonValider = document.querySelector("#bouton");

function calculAge(anneeNaissance, anneeenCours){
    let age = anneeenCours - anneeNaissance;
    console.log("Age calculé :", age);
    return age;
}
// Ajouter un écouteur d'événement  
/*elementBoutonValider.addEventListener("click", function() {
    console.log("Vous avez cliquer sur le bouton Valider.");
});*/

elementBoutonValider.addEventListener("click", ()=> {
    console.log("Vous avez cliquer sur le bouton Valider.");
    let prenomsaisie = prenomUtilisateur.value;
    console.log("Prénom saisi : ", prenomsaisie);

    let nomsaisie = nomUtilisateur.value;
    console.log("Nom saisi : ", nomsaisie );

    let anneeSaisie = anneeNaissance.value;
    console.log("Année saisie : ", anneeSaisie);   
  
   let ageObtenu = calculAge(anneeSaisie, 2024);

   const elementSpan = document.querySelector("#message");
   elementSpan.innerHTML += `Vous avez, ${ageObtenu} ans.`;

   if (ageObtenu < 18){
    elementSpan.innerHTML += ` Vous êtes mineur(e).`;
   } else {
    elementSpan.innerHTML += ` Vous êtes majeur(e).`;
   }
});                        