import plural from "plural-ru";

/**
 * Валидирует максимальную длину строки
 * @param maxLength - Максимальное количество символов для ввода
 * @param mrssage - Кастомное сообщение.
 *
 * @example rules: { maxLength: getMaxLengthRule(1000)}
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
