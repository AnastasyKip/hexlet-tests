import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

// Тесты
assert.strictEqual(capitalize('hello'), 'Hello', 'Функция работает неверно! (hello)');
assert.strictEqual(capitalize(''), '', 'Функция работает неверно! (empty string)');

console.log('Все тесты пройдены!');