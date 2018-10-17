/* Array.prototype.filter - Exercice 5

Ecrire une fonction searchWordFilter, qui attends deux paramètres:
1. un tableau de chaînes (par exemple des noms de produits, de films, etc.)
2. un terme de recherche

La fonction doit renvoyer un tableau ne contenant que les éléments dont le nom contient
la chaîne recherchée.

Il y a là aussi plusieurs façons d'écrire cette fonction, en utilisant indexOf ou includes.
Une petite difficulté supplémentaire: la recherche être "case insensitive" (insensible à la
casse), c'est-à-dire qu'une recherche sur 'star' ne doit pas éliminer les chaînes contenant
'Star'.

Exemple d'entrée:
  
1. tableau de chaînes
  [
    'Mad Max: Fury Road',
    'Interstellar',
    'Revenge of the Nerds',
    'Revenge of the Pink Panther',
    'Star Wars: Episode I - The Phantom Menace',
    'Star Wars: Episode II - Attack of the Clones',
    'Star Wars: Episode III - Revenge of the Sith'
  ]

2. terme de recherche: 'revenge'


==> Sortie attendue:
  [
    'Revenge of the Nerds',
    'Revenge of the Pink Panther',
    'Star Wars: Episode III - Revenge of the Sith'
  ]


 */

// function searchWordFilter(items, search) {
//   return items.filter(item => {
//     let itemLower = item.toLowerCase();
//     let searchLower = search.toLowerCase();
//    if (itemLower.includes(searchLower)){
//      return item;
//    }
//   });
// }

function searchWordFilter(items, search) {
  return items.filter(item => {
    let arrLower = item.split(' ').map(item => item.toLowerCase());
    // attention: case insensitive : ca veut dire qu'on doit ignorer la case avant de les comparer en utilisant toLowerCase() ou toUpperCase()
    let i = 0;
    while (arrLower[i]!== search.toLowerCase() && i < arrLower.length){
        i++;
        }
    if (i < arrLower.length){
      // il faut retourner un boolean true
      return true;
    }
    
  });
}

// Ne pas modifier l'export
module.exports = searchWordFilter;
