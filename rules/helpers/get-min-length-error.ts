const MIN_LENGTH_TEXT = 'Минимальное кол-во символов '

/**
 * Генерирует сообщение об ошибке.
 * @param length - Количество символов.
 */
const getMinLengthError = (length: number) => {
  return `${MIN_LENGTH_TEXT}${length}.`
}
