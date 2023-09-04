import capitalize from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.equal(capitalize('hello'), 'Hello') /*{
  throw new Error('Функция работает неверно!');
}*/

assert.equal(capitalize(''), '') /*{
  throw new Error('Функция работает неверно!');
}*/

console.log('Все тесты пройдены!');