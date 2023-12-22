export function getDays(): string[] {
  return Array.from({ length: 7 }, (_, index) => `${index + 1}`);
}

export function getHours(): string[] {
  return Array.from({ length: 24 }, (_, index) => `${index}`);
}

export function getMinutes(): string[] {
  return Array.from({ length: 60 }, (_, index) => `${index}`);
}
