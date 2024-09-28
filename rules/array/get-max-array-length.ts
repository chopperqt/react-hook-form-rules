/**
 * Validates an array for the maximum number of values.
 * @param arr - Array of values.
 * @param maxLength - Maximum number of values.
 * @param message - Custom message.
 *
 * @example getMaxArrayLengthRule(2, "Maximum number of values is 2").
 */
export const getMaxArrayLengthRule = (
  arr: unknown[],
  maxLength: number,
  message?: string,
) => {
  const defaultMessage = `Maximum number of values - ${maxLength}.`;

  const formattedMessage = message || defaultMessage;

  return arr.length < maxLength || formattedMessage;
};
