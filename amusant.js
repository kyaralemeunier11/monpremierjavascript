// 1
let nom = "LEMEUNIER";
let prenom = "Kyara";
let dateNaissance = 2006;

// 2
console.log(typeof nom);

// 3
let age = prompt("Quel âge avez vous ?");
alert(`vous avez ${age} ans !`);
// prompt() sert à afficher des questions interactives

// 4
let isCodeur = confirm("Êtes-vous codeur ?");
alert(isCodeur);
// confirm() créer un booléen, la réponse est soit vraie soit fausse
 
// 5
let nomUtilisateur = prompt("Quel est votre nom ?");
alert(`Votre nom est ${nomUtilisateur}`);

// 6
let hisabu = 2;
hisabu++;
alert(hisabu);
// Le résultat affiché est 3, hisabu++ signifie +1

// 7
let shikoa = ++hisabu;
alert(shikoa);
// Le résultat est 4, il n'y a pas de différence entre hisabu++ et ++hisabu

//8
let annee = prompt("Dans quelle année sommes-nous ?");
if (annee == 2015){
    alert("Vous avez juste!");
} else{
    alert("Vous vous tromper?");
}
//IF signifie si et ELSE sinon

//9
let utilisateur = new Object();
console.log(typeof utilisateur);

//10
let monTableauVille = ["Paris", "Toulouse", "Marseille", "Mamoudzou", "Dzaoudzi", "Acoua", "Chirongui"];
console.log(typeof monTableauVille);

for(let i = 0; i < monTableauVille.length; i++){
    console.log(`${i}`, monTableauVille[i]);
} 

// L'Objet
// Déclarer un objet
let person = new Object();

//Objet sans constructeur
let person2 = {
    monNom: "Lemeunier",
    monPrenom: "Kyara",
    monVillage: "Acoua",
    notes: [15, 20, 18],
}

// Accéder à une information de mon objet
console.log(person2.monNom);
console.log(person2.notes[2]);
console.log(person2["notes"]);
