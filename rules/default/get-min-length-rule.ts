import plural from "plural-ru";

/**
 * Returns a rule that validates the minimum length of a string.
 * @param minLength - Minimum number of characters allowed.
 * @param message - Custom message.
 *
 * @example rules: { minLength: getMinLengthRule(20) }
 */
export const getMinLengthRule = (minLength: number, message?: string) => {
  const formattedMessage = `Минимальная длина ${minLength} ${plural(
    minLength,
    "символ",
    "символа",
    "символов",
  )}.`;

  return {
    value: minLength,
    message: message || formattedMessage,
  };
};
