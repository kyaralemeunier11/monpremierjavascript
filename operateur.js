// LES OPERATEURS EN JAVASCRIPT
// Ils permettent d'effectuer des calculs

// Opérateur + : permet d'additionner des nombres
let prix = 5+6;

// Opérateur + : permet de cocaténer des chaînes de caractères
let message = "Bonjour " + " Madame";

// Opérateur - : permet de soustraire des nombres
let réduction = 6-4;

// Opérateur * : permet de multiplier des nombres
let multiplication = 5*4;

// Opérateur / : permet de diviser des nombres
let division = 8/2;

// Opérateur = : permet d'affecter la valeur à la valeur en cours

/* Opérateur == : permet de comparer les valeurs entre deux variables
Si les deux valeurs sont égales,  alors JavaScriptretourne la valeur TRUE
si les deux valeurs sont différentes, alors JavaScript retourne la valeur FALSE
*/
let comparaison = multiplication == division;
// Opérateur === : permet de vérifier que le valeur et le typage sont identiques
let nombre = 12;
let nombre2 = "12";
let tripleegal = nombre === nombre2;

/* Opérateur != : permet de vérifier la différence entre deux variables
Si les deux valeurs sont égales, alors JavaScript retourne la valeur FALSE
si les deux valeurs sont différentes, alors JavaScript retourne la valeur TRUE
*/
let différent = multiplication != division;

alert(tripleegal);