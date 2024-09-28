const DEFAULT_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const DEFAULT_MESSAGE =
  "Please check the correctness of the entered email address.";

interface EmailRule {
  pattern?: RegExp;
  message?: string;
}

/**
 * Validates an email address.
 * @param options - Parameters.
 * @param options.pattern - Regular expression.
 * @param options.message - Custom message.
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
  };
};
