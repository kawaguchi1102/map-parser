export const escape = {
  '"': '"',
  '\\': '\\',
  '/': '/',
  b: 'b',
  f: '\f',
  n: '\n',
  r: '\r',
  t: '\t'
};

/**
 * @param m {string}
 * @param index {number}
 * @param text {string}
 */
export const err = (m, index, text) => {
  throw {
    name: 'SyntaxError',
    message: m,
    at: index,
    text: text
  };
}