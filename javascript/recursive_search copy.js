function recursiveSearch(arr, target) {
  if (arr.length === 0) return false;
  return target === arr.pop() ? true : recursiveSearch(arr, target);
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
 * 
 */
