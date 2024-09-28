const REQUIRED_MESSAGE_TEXT = 'Это поле обязательное.';

/**
 * Валидирует массив, проверяет есть ли в нем значения
 * @param arr - Массиов со значениями
 * @param message - Кастомное сообщение.
 * 
 * @example rules: { validate: (arr) => getRequiredArrrayRule(arr) }
 */
export const getRequiredArrayRule = (arr: unknown[] = [], message?: string) => {
  return arr.length > 0 || (message || REQUIRED_MESSAGE_TEXT);
};
