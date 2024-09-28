import { REQUIRED_MESSAGE_TEXT } from "../constants";

/**
 * Validates an object, checking if it contains values.
 * @param obj - Object with values.
 * @param message - Custom message.
 * 
 * @example rules: { validate: (obj) => getRequiredObjectRule(obj) }
 */
export const getRequiredObjectRule = (obj: Record<string, unknown>, message?: string) => {
  const formattedMessage = message || REQUIRED_MESSAGE_TEXT;

  if (!obj) {
    return false || formattedMessage;
  }

  return Object?.keys(obj)?.length > 0 || formattedMessage;
};
