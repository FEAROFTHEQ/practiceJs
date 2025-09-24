export default function makeArray(firstArray, secondArray, maxLength) {
  const mergedArray = firstArray.concat(secondArray);
  return mergedArray.length > maxLength
    ? mergedArray.slice(0, maxLength)
    : mergedArray;
}
