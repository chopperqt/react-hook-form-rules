const MIN_TEXT = 'Минимальное значение '

/**
* Генирирует сообщение об ошибке.
* @param min - Минимальное значение.
*/
const getMinError = (min: number) => {
  return `${MIN_TEXT}${min}`
}
