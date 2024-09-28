const REQUIRED_MESSAGE_TEXT = 'Это поле обязательное.';

/**
 * Валидирует объект, проверяет если в нем значения
 * @param obj - Объект со значениями
 * @param message - Кастомное сообщение.
 * 
 * @example rules: { validate: (obj) => getRequiredObjectRule(obj) }
 */
export const getRequiredObjectRule = (obj: Record<string, unknown> = {}, message?: string) => {
  const formattedMessage = message || REQUIRED_MESSAGE_TEXT;

  if (!obj) {
    return false || formattedMessage;
  }

  return Object?.keys(obj)?.length > 0 || formattedMessage;
};
