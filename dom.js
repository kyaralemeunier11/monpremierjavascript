// Manipuler le DOM

// Sélectionner  un élément
document.head; // Récupère l'élément head
document.title;

//  console.log(document.title);

// Je récupère le titre du document HTML
// puis, je stocke le titre dans la variable titrePageweb
let titrePageweb = document.title;
 console.log(titrePageweb);

let monParagraphe = document.querySelector("#paragraphe1");
console.log("Mon paragraphe : ", monParagraphe);

let monSpan = document.querySelector("#paragraphe1 span");
console.log("Mon span : ", monSpan);

// Récupérer les éléments grâce au sélecteur
let monAgent = document.querySelector("#agent1");
console.log(monAgent);

let maListe = document.querySelector(".maListe");
console.log("Ma deuxième liste : ", maListe); 

let maListeIntegrale = document.querySelectorAll(".maListe");
console.log("Ma liste intégrable", maListeIntegrale); 

// Modifier un élément du DOM

let elementImage = document.querySelector("#premiereImage");
elementImage.setAttribute("class", "photoModifiee");

elementImage.src = "jolie.png";
console.log("Mon image APRES modification: ", elementImage);

elementImage.classList.add("nouvelleClasse");

console.log("ajout nouvelle classe", elementImage);

elementImage.classList.remove("photo");

// Créer un nouvel élément dans la page
// On utilise la méthode createElement

let nouveauDiv = document.createElement("div");
let nouveauTitre = document.createElement("h3");
// <h3> Mon tritre de section niveau 3 </h3>
nouveauTitre.textContent = "Mon titre de section niveau 3";

// Sélectionner l'élément body
let body = document.querySelector("body");
body.appendChild(nouveauTitre); 
body.appendChild(nouveauDiv);

/* <body> 
     <div> => body.appendChild(nouveauDiv);
       <h3> Mon titre de section niveau 3 </h3>
     </div>
   </body>
*/ 
