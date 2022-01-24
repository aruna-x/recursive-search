function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }
  else {
    return arr[0] === target ? true : recursiveSearch(arr.slice(1), target);
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", recursiveSearch([3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([], 4));
}

module.exports = recursiveSearch;

/**
 * 1. paraphrase
 * 
 * given an array and a target 
 * return true if array includes target
 * else false.
 * 
 * 2. tests
 * 
 * [], 4
 * [3], 3
 * 
 * 3. pseudocode
 * 
 * compare target to first element.
 * if no, pass back in target and spliced or shifted array... not very efficient (same as iteration)
 * 
 * 4. code (above)
 * 5. refactor
 * 6. optimize
 * 
 */
