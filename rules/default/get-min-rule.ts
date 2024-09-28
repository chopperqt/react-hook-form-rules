/**
 * Returns an error if the number is less than the specified value.
 * @param min - Minimum number.
 * @param message - Custom message.
 * 
 * @example rules: { min: getMinRule(20) }
 */
export const getMinRule = (min: number, message?: string) => ({
  value: min,
  message: message || `Minimum value - ${min}.`,
})
