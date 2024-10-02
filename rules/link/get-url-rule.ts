const DEFAULT_MESSAGE = "The URL does not match the format.";
const DEFAULT_PATTERN =
  /(http(s)?):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

interface UrlRule {
  message?: string;
  pattern?: RegExp;
}

/**
 * Returns a rule that validates the input URL.
 * @param options - Parameters.
 * @param options.pattern - Regular expression.
 * @param options.message - Custom message.
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
