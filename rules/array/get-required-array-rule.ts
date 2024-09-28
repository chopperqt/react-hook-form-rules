const REQUIRED_MESSAGE_TEXT = 'Это поле обязательное.';

/**
 * Validates an array, checking if it contains values.
 * @param arr - Array of values.
 * @param message - Custom message.
 * 
 * @example rules: { validate: (arr) => getRequiredArrayRule(arr) }
 */
export const getRequiredArrayRule = (arr: unknown[] = [], message?: string) => {
  return arr.length > 0 || (message || REQUIRED_MESSAGE_TEXT);
};
