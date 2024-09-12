function secondHighest(arr) {
  // Handle edge cases: empty array, array with only one element, or all elements are the same
  if (arr.length === 0 || arr.length === 1 || new Set(arr).size === 1) {
    return -Infinity;
  }

  // Find the highest element
  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  // Find the second-highest element
  let secondHighest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < highest && arr[i] > secondHighest) {
      secondHighest   
 = arr[i];
    }
  }

  return secondHighest;
}