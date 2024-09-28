const DEFAULT_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const DEFAULT_MESSAGE = "Пожалуйста, проверьте правильность введенного адреса электронной почты."

interface EmailRule {
  pattern?: RegExp
  message?: string
}

/**
 * Валидирует адресс электронной почты.
 * @param options - Параметры.
 * @param options.pattern - Регулярное выражение.
 * @param options.message - Кастомное сообщение.
 * 
 * @example rules: { pattern: getEmailRule() }
 */
export const getEmailRule = ({
  pattern = DEFAULT_PATTERN,
  message = DEFAULT_MESSAGE,
}: EmailRule) => {
  return {
    value: pattern,
    message,
  }
}
