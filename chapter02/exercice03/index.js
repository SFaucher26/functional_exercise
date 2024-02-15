/**
 * Print the number of occurrences of a wanted element in the table.
 * @param {number[]} table
 * @param {number} wanted
 */
export function countOccurrencesInTable(table, wanted) {
  let count = 0;
  for (let i = 0; i < table.length; i++) {
    if (table[i] === wanted) {
      count++;
    }
  }
  console.log(count);
}

/**
 * Print only unique elements of the table.
 * @param {number[]} table
 */
export function printUniqueElements(table) {

  // function same(array){
  // return array.filter((element, index) => array.indexOf(element) == index)
  // }
  // let result = same(table);
  // console.log(result);

  let unique = [...new Set(table)];
  console.log(unique);
}
 

/**
 * Check if the table is sorted in ascending order.
 * @param {number[]} table
 */
export function isTableSorted(table) {
// const sortedTable = [...table].sort((a, b) => a - b);
// if (sortedTable.lengt !== table.length) console.log(false);
// let result = sortedTable.every( (value, index)=> value ===table[index])
// console.log(result);

for (let i = 0; i < table.length -1 ; i ++){
  if (table[i] > table[i + 1]){
    console.log(false);
    return;
  }
}
console.log(true);

}
