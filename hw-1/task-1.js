export default function isEnoughCapacity(products, containerSize) {
  let total = 0;
  for (const productQuantity of Object.values(products)) {
    total += productQuantity;
  }
  return total <= containerSize;
}
