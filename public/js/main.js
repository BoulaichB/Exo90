// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 1*

// ### 1. Stock la balise body dans une variable du nom de "myBody"
const myBody = document.getElementsByTagName('body')[0];
// ### 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log
let firstChild = myBody.children[0];
console.log(firstChild);
// ### 3. Trouve une méthode pour récuperer le dernièr élément de "myBody" et affiche le dans un console.log
let lastChild = myBody.children[myBody.children.length - 1];
console.log(lastChild);
// ### 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log
const exo4 = document.getElementsByTagName('div')[0].children;
console.log(exo4);
// ### 5. Récupère le premier li, puis trouve une méthode JS pour afficher l'élément suivant( c'est a dire le second li ) et affiche le résultat dans un CL
let firstListItem = document.getElementsByTagName('li')[0];
let secondListItem = firstListItem.nextElementSibling;
console.log(secondListItem);
// ### 6. Récupère le second élément puis trouve une méthode JS pour afficher l'élément précédant( c'est a dire le premier li ) et affiche le résultat dans un CL
let secondListItemBis = document.getElementsByTagName('li')[1];
let firstListItemBis = secondListItemBis.previousElementSibling;
console.log(firstListItemBis);

