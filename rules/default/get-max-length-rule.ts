/**
 * Validates the maximum length of a string.
 * @param maxLength - Maximum number of characters allowed.
 * @param message - Custom message.
 *
 * @example rules: { maxLength: getMaxLengthRule(1000) }
 */
export const getMaxLengthRule = (maxLength: number, message?: string) => {
  const formattedMessage = `Maximum length - ${maxLength}.`;

  return {
    value: maxLength,
    message: message || formattedMessage,
  };
};
