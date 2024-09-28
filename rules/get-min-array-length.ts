/**
 * Валидирует массив, на максимальное кол-во значений
 * @param arr - Массиов со значениями.
 * @param minLength - Максимальное количество значений.
 * @param message - Кастомное сообщение.
 * @example getMinArrayLengthRule(3, "Максимальное кол-во значений - 2").
 */
export const getMinArrayLengthRule = (
  arr: unknown[],
  minLength: number,
  message?: string,
) => {
  const defaultMessage = `Минимальное количество значений - ${minLength}.`;

  const formattedMessage = message || defaultMessage;

  return arr.length > minLength || formattedMessage;
};
