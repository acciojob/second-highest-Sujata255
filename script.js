//your JS code here. If required.
function secondHighest(arr) {
    // Handle edge cases
    if (arr.length < 2) {
        return -Infinity;
    }
    
    let first = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }
    
    // If second highest remains -Infinity, it means all elements were the same
    if (second === -Infinity) {
        return -Infinity;
    }
    
    return second;
}

// Examples
console.log(secondHighest([5, 1, 2, 3, 4]));    // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5])); // Output: -2
console.log(secondHighest([]));                // Output: -Infinity
console.log(secondHighest([1]));               // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1])); 