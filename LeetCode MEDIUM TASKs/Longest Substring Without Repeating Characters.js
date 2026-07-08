/**
 * =============================================================================
 * НАЗВАНИЕ ЗАДАЧИ: 3. Longest Substring Without Repeating Characters (LeetCode)
 * СЛОЖНОСТЬ: Medium
 * * УСЛОВИЕ:
 * Дана строка `s`. Найдите длину самой длинной подстроки 
 * без повторяющихся символов.
 * * Ограничения: подстрока — это непрерывная последовательность символов внутри строки.
 * * Пример:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: Самая длинная подстрока без повторений — "abc", её длина равна 3.
 * =============================================================================
 */

/**
 * @param {string} s
 * @return {number}
 */

const string = "abcabcbb";
var lengthOfLongestSubstring = function(str) {
    let maxLength = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; i <= str.length; j++) {
            let substring = str.slice(i, j);
            let uniqueSymbols = [...new Set(str)];
            
            if (substring.length === uniqueSymbols.length) {
                if (substring.length > maxLength) {
                    maxLength = substring.length;
                }
            } else {
                break;
            }
        }   
    }    
    
    return maxLength;
};

lengthOfLongestSubstring(string);



var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let left = 0; // Левая граница окна
    const uniqueChars = new Set(); // Наше "окно" для быстрой проверки дубликатов

    // Правая граница окна (right) плавно идет вперед
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        // Если нашли дубликат, сжимаем окно слева, пока дубликат не удалится
        while (uniqueChars.has(currentChar)) {
            uniqueChars.delete(s[left]);
            left++; // Двигаем левую границу вправо
        }

        // Теперь текущий символ точно уникален для этого окна, добавляем его
        uniqueChars.add(currentChar);

        // Считаем размер текущего окна и обновляем максимум
        const currentWindowLength = right - left + 1;
        if (currentWindowLength > maxLength) {
            maxLength = currentWindowLength;
        }
    }

    return maxLength;
};