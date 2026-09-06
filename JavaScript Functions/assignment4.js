
function Sorttis(numbers) {
  const sorts = numbers.slice().sort((a, b) => a - b);
  return sorts;
}

const numbers = [5, 2, 8, 1, 9];

console.log("Original Array:", numbers);
console.log("Sorted Array:", Sorttis(numbers));
