const DEFAULT_MESSAGE = "Ссылка не соответствует формату"
const DEFAULT_PATTERN = /(http(s)?):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

interface UrlRule {
  message?: string
  pattern?: RegExp
}

/**
 * Возвращает правило, которое валидирует ввод url
 * @param options - Параметры.
 * @param options.pattern - Регулярное выражение.
 * @param options.message - Кастомное сообщение.
 * 
 * @example rules: { pattern: getUrlValidationRule() }
 */
export const getUrlRule = ({
  pattern = DEFAULT_PATTERN,
  message = DEFAULT_MESSAGE,
}: UrlRule) => {
  return {
    message,
    value: pattern,
  };
};
