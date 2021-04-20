// // Exo 1 
// x = prompt("Un chiffre svp")
// y = prompt("un autre chiffre svp")
// z = x == y

// if (z == true ) {
//     alert(x + " " + y + " " +"sont-il égaux?:"+ z)
// } else {  
//     alert(x + " " + y + " " +"sont-il égaux?:"+ z)
// }


// // Exo 2 
// x = prompt("Un chiffre svp")
// y = prompt("un autre chiffre svp")
// z = x < y

// if (z == true ) {
//     alert("Le nombre "+ x + " est-il plus petit que le nombre " + y + "? " + z)
// } else {  
//     alert("Le nombre "+ x + " est-il plus petit que le nombre " + y + "? " + z)
// }


// // Exo 3 
// x = prompt("Un chiffre svp")
// y = prompt("un autre chiffre svp")
// z = prompt("un autre chiffre svp")
// bool = x + y > z  

// if (z == true ) {
//     alert("La somme du nombre " + x + " + le nombre "+ y +" est-elle plus grande que le nombre "+ z +" ?: " + bool)
// } else {  
//     alert("La somme du nombre " + x + " + le nombre "+ y +" est-elle plus grande que le nombre "+ z +" ?: " + bool)
// }


// // Exo 4
// x = prompt("Votre phrase")
// y = prompt("Estimation")
// z = x.length == y

// if (z == true ) {
//     alert("Bravo teubé")
// } else {  
//     alert(z + " tu étais à " + Math.abs(x.length-y) + " unités de la bonne réponse !")
// }


// // Exo 5
// x = prompt("Quel est votre prénom?")
// bool = (x.trim()).length == 0

// if (bool == true) {
//     x = prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?")
// }
// else
//     alert(`Bonjour, ${x}`)


// // Exo 6 
// temp = confirm("Voulez-vous vous abonner? ok = oui cancel = non")
// if (temp == true) {
//     temp = prompt("normal ou luxe?")
//         if (temp == "luxe") {
//             alert("Félicitation vous avez choisis la formule Luxe!")

//         }else if (temp == 'normal') {
//             alert("Merci pour votre abonnement.")
//         }else{
//             temp = confirm("Etes-vous certain?")
//                 if (temp == false) {
//                     temp = prompt("normal ou luxe?")
//                         if (temp == "luxe") {
//                             alert("Félicitation vous avez choisis la formule Luxe!")
//                         }else if (temp == 'normal') {
//                             alert("Merci pour votre abonnement.")
//                         }
//                 }else{
//                     alert("NOOOOOOOOOOOOOOOOOOOOOOO")
//                 }
//         }
// }


// // Exo 7
// q1 = prompt("Qui est le Roi?")
// q2 = prompt("Un truc qui rhime avec cactus")

// a1 = "moi" 
// a2 = "anus"

// if (q1 != a1 && q2 != a2 ) {
//     alert("Vous-avez échoué")
// } else if (q1 != a1 || q2 != a2) {
//     if ( q1 == a1) {
//         alert("Vous y étiez presque, Question 2 " )
//     } else {
//         alert("Vous y étiez presque, Question 1 " )
//     } 
// } else {
//     alert("OMEDETTO")
// } 


// // Exo 8

// let age = prompt("Votre age ici ...");
// if (age < 0) {
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher")
// }else if (age < 18) {
//     alert("vous êtes mineur, l’accès est réservé aux grands")
// }else if (age == 18) {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
// }else if (age <= 100) {
//     alert("vous êtes majeur, vous pouvez réserver")
// }else{
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.") 
// }

// // avec date
// let adn = prompt("Votre année de naissance");
// var aujd = new Date();
// var year = aujd.getFullYear();
// console.log(aujd)
// if ((year-adn) < 0 ) {
//     alert("vous n’êtes même pas nés, n’essayez pas de tricher")
// }else if ((year-adn) < 18) {
//     alert("vous êtes mineur, l’accès est réservé aux grands")
// }else if ((year-adn) == 18) {
//     alert("pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
// }else if ((year-adn) <= 100) {
//     alert("vous êtes majeur, vous pouvez réserver")
// }else{
//     alert("vous êtes encore vivant ? Évitez de voir ce film pour le rester.") 
// }



// // Exo 9 
// let riche = confirm("est-ce que vous êtes riche ?")
// let vacances = confirm("voulez-vous partir en vacance ?")
// let chat = confirm("est-ce que vous avez un chat ?")

// (vacances != true)
// alert("pas de problème, ne partez pas en vacance")



// (riche != true) || (chat != false)
// alert("Même si vous le voulez, vous ne pouvez pas partir.")

// (riche != false) && (chat == true) && (vacances == false)
// alert("Tout est parfait, partez en vacance !")

// (riche != false) &&  (chat != true)
// alert("Vous pourriez partir en vacance si vous le voulez")



// (riche != false) || (chat != true) || (vacances != false)
// alert("go home")





