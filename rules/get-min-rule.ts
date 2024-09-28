export interface MinRuleProps {
  min: number
  message?: string
}

/**
 * Возвращает ошибку, если число, меньше указанного.
 * @param options - Параметры.
 * @param options.max - Минимальное число
 * @param options.message - Кастомное сообщение.
 * 
 * @example rules: { max: getMinRule(20) }
 */
export const getMinRule = ({
  min,
  message,
}: MinRuleProps) => ({
  value: min,
  message: message || `Минимальное значение ${min}.`,
})
