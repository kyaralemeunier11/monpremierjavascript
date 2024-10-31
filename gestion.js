// Gestion de bibliothèque
/*let totalLivres = 500;
totalLivres += 50;
totalLivres -= 10;
totalLivres += 5;

console.log(totalLivres);
 
let affichageTotalLivres = "Le nombre de livres total est "

console.log(affichageTotalLivres + totalLivres);*/

// Recommandation de film
let ageUtilisateur = 20;
if(ageUtilisateur < 13){
    console.log("Le Roi Lion");
} 
if(ageUtilisateur > 13 && ageUtilisateur < 18){
    console.log("Titanic");
}
if(ageUtilisateur > 18 ){
    console.log("Rambo2");
} 

// Gestion de ticket de cinéma
let ticket = {
    nomFilm: "Koungou",
    prix: 10,
    numeroSalle: 11,
}
let nom = "Kyara";

console.log("Bonjour", nom, "votre film", ticket.nomFilm, "est en salle", ticket.numeroSalle); 