export default function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }
  let totalCal = 0;
  for (const day of days) {
    totalCal += day.calories;
  }
  return totalCal / days.length;
}
