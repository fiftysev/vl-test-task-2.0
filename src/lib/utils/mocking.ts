export function pickRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomDate(startDate: Date, endDate: Date) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const timestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp) + startTimestamp);
  return new Date(timestamp);
}

export const getRandomDateInThisYear = () =>
  getRandomDate(new Date(2023, 0, 1), new Date(2023, 3, 1));
