// LES FONCTIONS
/* Les fonctions sont des opérations qui effectuent des calculs et retournent un résultat.
L'avantage des fonctions sont réutilisables
*/

let prix = 4+5;
let prix2 = 40+43;

// Je déclare une fonction qui a pour tâche d'additioner deux chiffres 
function calculaddition (chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}
let prix3 = calculaddition(40,43);

function quelage (chiffre1, chiffre2) {
    let resultat = chiffre1 - chiffre2;
    return resultat;
}   
let age = quelage(2024,2011);

alert(age);