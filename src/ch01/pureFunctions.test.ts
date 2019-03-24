import isIndexPage from './pureFunctions';

(function shouldReturnTrueWhenPathIsIndex() {
  const expected = true;
  const result = isIndexPage('/');
  if (expected !== result) {
    throw new Error(`Expected ${expected} to equal ${result}`);
  }
})();

(function shouldReturnTrueWhenPathIsIndex() {
  const expected = false;
  const result = isIndexPage('/nope');
  if (expected !== result) {
    throw new Error(`Expected ${expected} to equal ${result}`);
  }
})();
