import plural from 'plural-ru'

/**
 * Возвращает правило, которое валидирует минимальную длину строки
 * @param maxLength - Минимальное количество символов для ввода
 * @param message - Кастомное сообщение.
 * 
 * @example rules: { minLength: getMinLengthRule(20) }
 */
export const getMinLengthRule = (minLength: number, message?: string) => {
  const formattedMessage = `Минимальная длина ${minLength} ${plural(
    minLength,
    'символ',
    'символа',
    'символов',
  )}.`

  return {
    value: minLength,
    message: message || formattedMessage,
  };
};
