import plural from "plural-ru";

/**
 * Validates the maximum length of a string.
 * @param maxLength - Maximum number of characters allowed.
 * @param message - Custom message.
 *
 * @example rules: { maxLength: getMaxLengthRule(1000) }
 */
export const getMaxLengthRule = (maxLength: number, message?: string) => {
  const formattedMessage = `Максимальная длина ${maxLength} ${plural(
    maxLength,
    "символ",
    "символа",
    "символов",
  )}.`;

  return {
    value: maxLength,
    message: message || formattedMessage,
  };
};
