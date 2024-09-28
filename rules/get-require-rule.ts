const REQUIRED_MESSAGE_TEXT = 'Это поле обязательное.';

/**
 * Валидирует обязательное поле.
 * @param isRequired - Динимический параметр, которые отвечает за то, что поле является обязательным.
 * @param message - Кастомное сообщение.
 * 
 * @example rules: { required: getRequiredRule() }
 */
export const getRequiredRule = (
  isRequired = true,
  message = REQUIRED_MESSAGE_TEXT
) => ({
  value: isRequired,
  message,
})
