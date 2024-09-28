/**
 * Валидирует массив, на максимальное кол-во значений
 * @param arr - Массиов со значениями.
 * @param maxLength - Максимальное количество значений.
 * @param message - Кастомное сообщение.
 * @example getMaxArrayLengthRule(2, "Максимальное кол-во значений - 2").
 */
export const getMaxArrayLengthRule = (
  arr: unknown[],
  maxLength: number,
  message?: string,
) => {
  const defaultMessage = `Максимальное количество значений - ${maxLength}.`;

  const formattedMessage = message || defaultMessage;

  return arr.length < maxLength || formattedMessage;
};
