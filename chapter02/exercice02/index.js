/**
 * Print in the console the sum of each elements.
 * @param {number[]} table
 */
export function sumOfTable(table) {
  function add(array) {
    return array.reduce((a, b) => a + b, 0);
  }
  let sum = add(table);
  console.log(sum);
}

/**
 * Print only even number of an array.
 * @param {number[]} table
 */
export function evenNumberOfTable(table) {
  const result = table.filter((element) => element % 2 == 0);
  console.log(result);
}

/**
 * Print index of first wanted element in table, print an error message if it's not in the table
 * @param {number[]} table
 * @param {number} wanted
 */
export function indexOfWantedInTable(table, wanted) {
  const indexWanted = table.indexOf(wanted);
  if (indexWanted == -1) {
    console.log("index does'nt exist");
  } else {
    console.log(indexWanted);
  }
}

/**
 * Print each elements that was greater than a limit
 * @param {number[]} table
 * @param {number} limit
 */
export function greaterThanLimitInTable(table, limit) {
  const greater = table.filter((element) => element > limit);
  console.log(greater);
}

/**
 * Print cumulative sum of table
 * @param {number[]} table
 */
export function cumulativeSumOfTable(table) {
  let sum = 0;
  for (let i = 0; i < table.length; i++) {
    sum += table[i];

    console.log(sum);
  }
}

/**
 * Print the minimum value in the table.
 * @param {number[]} table
 */
export function printMinValue(table) {
    let min = Math.min(...table);
    console.log(min);
}

/**
 * Print the maximum value in the table.
 * @param {number[]} table
 */
export function printMaxValue(table) {
  let max = Math.max(...table);
  console.log(max);
}
