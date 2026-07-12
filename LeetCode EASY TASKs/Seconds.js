/**
 * =============================================================================
 * НАЗВАНИЕ ЗАДАЧИ: Readable Time (человекочитаемое время)
 * СЛОЖНОСТЬ: Easy
 *
 * УСЛОВИЕ:
 * Напишите функцию readable(seconds), которая принимает неотрицательное
 * целое число `seconds` (количество секунд) и возвращает СТРОКУ —
 * время в формате HH:MM:SS, соответствующее этому количеству секунд.
 *
 * Формат:
 * - HH — часы,   две цифры, диапазон 00-99
 * - MM — минуты, две цифры, диапазон 00-59
 * - SS — секунды, две цифры, диапазон 00-59
 *
 * Примеры:
 * readable(0)     // '00:00:00'
 * readable(59)    // '00:00:59'
 * readable(60)    // '00:01:00'
 * readable(3599)  // '00:59:59'
 * readable(3600)  // '01:00:00'
 * readable(86399) // '23:59:59'
 *
 * Ограничения:
 * - seconds — целое число, seconds >= 0
 * - часы могут доходить до 99 (не сбрасываются по суткам)
 * =============================================================================
 */

/**
 * @param {number} seconds
 * @return {string}
 */
function readable(seconds) {
  let hour = Math.floor(seconds / 3600).toString().padStart(2, "0");;
  let minute = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  let second = (seconds % 60).toString().padStart(2, "0");
  
  const result = `${hour}:${minute}:${second}`;
  return result;
}

console.log(readable(3600));
console.log(readable(86399));
console.log(readable(33));
console.log(readable(3599));
