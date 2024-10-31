// La notion de classe en JavaScript
// La syntaxe de classe

class MyClass {
    constructor(){}
    method1(){}
    method2(){}
    method3(){}
}

class Utilisateur {
    constructor(nomUtilisateur){
       this.nom = nomUtilisateur;
    }
    bienvenue(){
        alert("Bienvenue " + this.nom);
    }
    getHeure(){
        const date = new Date();
        let heure = date.getHours();
        let minute = date.getMinutes();
        let seconde = date.getSeconds()
        console.log(heure, ":", minute, ":", seconde);
        if(seconde < 10){
            seconde = "0" + seconde
        }
        if(minute < 10){
            minute = "0" + minute;
        }
    }
}
// Objet utilisateur appartient à la classe Utilisateur
let utilisatrice = new Utilisateur("Vany");
utilisatrice.bienvenue();

/*  =======EXPLICATION DE CODE let utilisateur = new Utisateur("Joe")=======
Lorsque new Utilisateur ("Joe") est appelé :
 1. un nouvel objet est crée
 2.le construteur s'éxecute avec l'argument "Joe" qui lui est passé et assigne this.nom à l'objet
*/ 
let utilisateur = new Utilisateur("Joe");
utilisateur.bienvenue();
utilisateur.getHeure();