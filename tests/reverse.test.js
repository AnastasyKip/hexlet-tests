import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import reverse from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test('reverse (big text via fixtures)', () => {
  const text = fs.readFileSync(path.join(__dirname, '__fixtures__', 'text.txt'), 'utf-8').trim();
  const expected = fs.readFileSync(path.join(__dirname, '__fixtures__', 'reversed.txt'), 'utf-8').trim();
  expect(reverse(text)).toEqual(expected);
});
