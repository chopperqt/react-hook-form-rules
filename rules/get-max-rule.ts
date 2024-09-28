/**
 * Возвращает ошибку, если число, больше указанного.
 * @param max - Максимальное число
 * @param message - Кастомное сообщение.
 * 
 * @example rules: { max: getMaxRule(20) }
 */
export const getMaxRule = (max: number, message?: string) => ({
  value: max,
  message: message || `Максимальное значение ${max}.`,
})
