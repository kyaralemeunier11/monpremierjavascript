// LES REGLES DE VALIDATION DE FORMULAIRE

// Vérifier que le champ 'Nom' est bien complété

const elementFormulaire = document.querySelector("form");
console.log(elementFormulaire);

// J'ajoute un écouteur d'évenement sur le formulaire. Pour écouter l'évenement submit
elementFormulaire.addEventListener("submit", (event)=>{
    event.preventDefault();

    const elementInputNom = document.querySelector("#nom");
    const valeurNom = elementInputNom.value;

    if(valeurNom ===""){
        console.log("Le champ nom est vide");
    } else{
        console.log("Le champ nom est rempli");
    }
    const elementInputPrenom = document.querySelector("#prenom");
    const valeurPrenom = elementInputPrenom.value;

    if(valeurPrenom ===""){
        console.log("Le champ prénom est vide");
    } else{
        console.log("Le champ prénom est rempli");
    }
});


