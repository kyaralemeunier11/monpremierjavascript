// LES BOUCLES
// Les boucles permettent de répéter la même opération à une condition précise
// Boucle WHILE signifie TANT QUE
/*
let numero = 0;

while(numero < 9){ // Tant que la valeur de la variable numéro est plus petite que 9
    // Alors on exécute les opérations suivantes
    console.log("PASSAGE", numero, "=");
    console.log("Numéro AVANT l'ajout de + 3, numéro est: ", numero);
    numero = numero + 3;
    console.log("Numéro APRES l'ajout de + 3, numéro est:", numero);
} */

 // Boucle FOR 
/* Permet d'exécuter un code un certain nombre de fois 
en précisant manuellement l'intervalle pour laquelle on souhaite faire la boucle
*/
for(let compteur = 0; compteur < 3; compteur++){
/*(let compteur = 0; compteur < 3; compteur++)
let compteur = 0; Je déclare la variable compteur avec la valeur 0
compteur++ à chaque fois que je fais la boucle, j'incrémente de +1 la valeur
de la variable compteur.
compteur < 3; Je teste si la valeur de la variable compteur est plus petite que 3
*/

// L'opération à exécuter
console.log("Le compteur est : " + compteur);
}

// Utiliser le boucle FOR pour manipuler un tableau
let tableauEleves = ["Fazati", "Dominique Jean", "Kaniza", "Nadhurati", "Ben", "Ben Ikbal", "Dalya",
"Jasmine", "Akramal", "Faiz", "Faoula", "Kyara", "Soihiroudine", "Tatyana", "Said", "Nicia", "Izad",
"Ambdil", "Thouaibat"];

console.log("Nombre d'éléments dans mon tableau : ", tableauEleves.length)

console.log("=== AVANT la boucle FOR ===");
for(let i = 0; i < tableauEleves.length; i++){
    console.log(tableauEleves[i]);
} 