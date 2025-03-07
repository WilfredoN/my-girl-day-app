export const interpolateColor = (
  startColor: string,
  endColor: string,
  progress: number,
): string => {
  const startRGB = {
    r: parseInt(startColor.slice(1, 3), 16),
    g: parseInt(startColor.slice(3, 5), 16),
    b: parseInt(startColor.slice(5, 7), 16),
  }

  const endRGB = {
    r: parseInt(endColor.slice(1, 3), 16),
    g: parseInt(endColor.slice(3, 5), 16),
    b: parseInt(endColor.slice(5, 7), 16),
  }

  const resultRGB = {
    r: Math.round(startRGB.r + (endRGB.r - startRGB.r) * progress),
    g: Math.round(startRGB.g + (endRGB.g - startRGB.g) * progress),
    b: Math.round(startRGB.b + (endRGB.b - startRGB.b) * progress),
  }

  const resultHex =
    '#' +
    resultRGB.r.toString(16).padStart(2, '0') +
    resultRGB.g.toString(16).padStart(2, '0') +
    resultRGB.b.toString(16).padStart(2, '0')

  return resultHex
}

export const calculateStringMatchProgress = (input: string, target: string): number => {
  if (!input) return 0
  if (input === target) return 1

  let matchCount = 0
  const minLength = Math.min(input.length, target.length)

  for (let i = 0; i < minLength; i++) {
    if (input[i] === target[i]) {
      matchCount++
    }
  }

  return matchCount / target.length
}
