import { safeFindUserAgeByName } from './sideEffects';

const users = [
  { ageInMonths: 1, name: 'Remo' },
  { ageInMonths: 2, name: 'Leo' }
];

(async function shouldReturnAgeWhenUserExists() {
  const expected = 1;
  const result = await safeFindUserAgeByName(users, 'Remo');
  if (expected !== result) {
    throw new Error(`Expected ${expected} to equal ${result}`);
  } else {
    console.log('expected is equal to result');
  }
})();

(async function shouldReturnNoUserErrorWhenUsersIsEmpty() {
  const expected = new Error('There are no users');

  safeFindUserAgeByName([], 'Leo').catch(err => {
    if (err.message === expected.message) {
      console.log('expected is equal to result');
    }
  });
})();

(async function shouldReturnNoUserErrorWhenUsersIsEmpty() {
  const expected = new Error('User not found!');

  safeFindUserAgeByName(users, 'Leo Blah Blah').catch(err => {
    if (err.message === expected.message) {
      console.log('expected is equal to result');
    }
  });
})();
