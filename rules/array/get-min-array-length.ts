/**
 * Validates an array for the maximum number of values.
 * @param arr - Array of values.
 * @param maxLength - Maximum number of values.
 * @param message - Custom message.
 *
 * @example getMaxArrayLengthRule(3, "Maximum number of values is 2").
 */
export const getMinArrayLengthRule = (
  arr: unknown[],
  minLength: number,
  message?: string,
) => {
  const defaultMessage = `Minimum number of values - ${minLength}.`;

  const formattedMessage = message || defaultMessage;

  return arr.length > minLength || formattedMessage;
};
