export default function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('аргументы должны быть числами');
}
return a + b;
}
