/**
 * Print a table sorted ASC using any technique you want
 * @param {number[]} table
 */
export function basicSortTable(table) {
    // variable qui represente la longueur du tableau
    let n = table.length
    //parcourt la liste
    for(let i = 0; i < n - 1; i++ ){
        //comparaison pour échange 
        for(let j = 0 ; j < n - i - 1; j ++){
            if(table[j] > table[j + 1]){
                //échange
                let valeurTemporaire = table[j];
                table[j] = table[j + 1];
                table[j + 1] = valeurTemporaire;
            }
        }
    }
    console.log(table);
    
}

/**
 * Print a table sorted ASC using Bubble sort
 * @param {number[]} table
 */
export function bubbleSortTable(table) {
    // variable qui represente la longueur du tableau
    let n = table.length
    //parcourt la liste
    for(let i = 0; i < n - 1; i++ ){
        //comparaison pour échange 
        for(let j = 0 ; j < n - i - 1; j ++){
            if(table[j] > table[j + 1]){
                //échange
                let valeurTemporaire = table[j];
                table[j] = table[j + 1];
                table[j + 1] = valeurTemporaire;
            }
        }
    }
    console.log(table);
}

/**
 * Print a table sorted ASC using insertion sort
 * @param {number[]} table
 */
export function insertionSortTable(table) {
    const n = table.length;
    //boucle for qui parcourt les éléments du tableau à partir du 
    //deuxième élémnet (let i = 1 (au lieu de 0 habituellement))
    for(let i = 1; i < n ; i ++){
        //je stocke la valeur courante 
        let current = table[i];
        let j = i - 1; // initialise l'indice j à l'élément précédent

        //boucle while qui déplace les éléments plus grands vers la droite
        //tant que j est supérieur ou égal à 0 et supérieur à la valeur courante
        while(j >= 0 && table[j]> current){
            //déplacer l'élément vers la droite
            table[j + 1] = table[j];
            //on décrémente j pour examiner l'élément précédent
            j--;
        }
        //On insère l'élément courant à sa place correcte dans la partie triée
        table[j + 1] = current;
    }
    console.log(table);
}

/**
 * Print a table sorted ASC using merge sort
 * @param {number[]} table
 */
export function mergeSortTable(table) {
    //si elle contien 0 ou 1 élément elle est déjà triée !
    if(table.length <= 1){
        return table;
    }
    //je divise le tableau en deux moitiés
    const middle = Math.floor(table.length/2);
    //je nome la partie de gauche 
    const leftHalf = table.slice(0, middle);
    //je nome la partie de droite
    const rightHalf = table.slice(middle);

    //je trie chaque moitié de façon récursive avec mergeSort
    const sortedLeftHalf = mergeSortTable(leftHalf);
    const sortedRightHalf = mergeSortTable(rightHalf);

    //je refusionne les deux moitiés triées 
    return merge(sortedLeftHalf, sortedRightHalf);
}
export function merge(leftTable, rightTable){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //fusionner les deux moitiés triées en une seule liste triée
    while(leftIndex < leftTable.length && rightIndex < rightTable.length){
        if(leftTable[leftIndex] < rightTable[rightIndex]){
            result.push(leftTable[leftIndex]);
            leftIndex ++;
        }else {
            result.push(rightTable[rightIndex]);
            rightIndex ++;
        }
    }

    //j'ajoute les éléments restants à la moitié de gauche 
    while(leftIndex < leftTable.length){
        result.push(leftTable[leftIndex]);
        leftIndex ++;
    }

    //j'ajoute les éléments restants à la moitié de droite 
    while(rightIndex < rightTable.length){
        result.push(rightTable[rightIndex]);
        rightIndex++;
    }
    return result;
}
const sortedTable = mergeSortTable(table);
console.log(sortedTable);

/**
 * Print a table sorted ASC using quick sort
 * @param {number[]} table
 */
export function quickSortTable(table) {
}
