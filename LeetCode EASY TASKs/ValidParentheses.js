/**
 * =============================================================================
 * НАЗВАНИЕ ЗАДАЧИ: 20. Valid Parentheses (LeetCode)
 * СЛОЖНОСТЬ: Easy
 * * УСЛОВИЕ:
 * Дана строка `s`, содержащая только символы '(', ')', '{', '}', '[' и ']'.
 * Определите, является ли входная строка валидной.
 * * Строка является валидной, если:
 * 1. Открывающие скобки должны быть закрыты скобками того же типа.
 * 2. Открывающие скобки должны быть закрыты в правильном порядке.
 * 3. Каждая закрывающая скобка имеет соответствующую открывающую скобку того же типа.
 * * * Пример:
 * Input: s = "()[]{}" -> Output: true
 * Input: s = "(]"     -> Output: false
 * Input: s = "([)]"   -> Output: false (неверный порядок!)
 * Input: s = "{[]}"   -> Output: true
 * =============================================================================
 */

/**
 * @param {string} s
 * @return {boolean}
 */

const testValue = "()[]{}";

var isValid = function (s) {
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stringArr = s.split("");
  let stack = [];
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === "(" || stringArr[i] === "[" || stringArr[i] === "{") {
      stack.push(stringArr[i]);
    }
    if (stringArr[i] === ")" || stringArr[i] === "]" || stringArr[i] === "}") {
      const open = stack.pop();
      const objClose = obj[open];
      if (objClose === stringArr[i]) {
      } else {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

isValid(testValue);
console.log(isValid("((("));   // должно быть false
console.log(isValid("["));     // должно быть false
