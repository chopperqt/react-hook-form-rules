/**
 * Returns an error if the number exceeds the specified value.
 * @param max - Maximum number.
 * @param message - Custom message.
 *
 * @example rules: { max: getMaxRule(20) }
 */
export const getMaxRule = (max: number, message?: string) => ({
  value: max,
  message: message || `Maximum value - ${max}.`,
});
