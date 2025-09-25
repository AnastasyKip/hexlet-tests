import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно! (hello)');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно! (empty string)');
}

console.log('Все тесты пройдены!');

