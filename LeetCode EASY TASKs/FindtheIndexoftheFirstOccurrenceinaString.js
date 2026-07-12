/**
 * =============================================================================
 * НАЗВАНИЕ ЗАДАЧИ: 28. Find the Index of the First Occurrence in a String
 * СЛОЖНОСТЬ: Easy
 *
 * УСЛОВИЕ:
 * Даны две строки: `needle` (иголка) и `haystack` (стог сена).
 * Верните индекс ПЕРВОГО вхождения `needle` в `haystack`.
 * Если `needle` не содержится в `haystack` — верните -1.
 *
 * Примеры:
 * Input:  haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Пояснение: "sad" встречается на индексах 0 и 6. Первое вхождение — 0.
 *
 * Input:  haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Пояснение: "leeto" не найдено в "leetcode".
 *
 * Ограничения:
 * - 1 <= haystack.length, needle.length <= 10^4
 * - обе строки состоят только из строчных латинских букв
 * =============================================================================
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const str2 = "leetcode";
const str1 = "leeto";

var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i
    }
  }
  return -1
};

strStr(str2, str1);
