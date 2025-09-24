export default function filterArray(numbers, value) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}
