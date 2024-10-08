import { REQUIRED_MESSAGE_TEXT } from "../constants";

/**
 * Validates a required field.
 * @param isRequired - Dynamic parameter that indicates whether the field is required.
 * @param message - Custom message.
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
