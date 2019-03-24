interface User {
  ageInMonths: number;
  name: string;
}

function findUserAgeByName(users: User[], name: string): number {
  if (users.length === 0) {
    throw new Error('There are no users');
  }

  const user = users.find(u => u.name === name);

  if (!user) {
    throw new Error('User not found!');
  } else {
    return user.ageInMonths;
  }
}

export function safeFindUserAgeByName(
  users: User[],
  name: string
): Promise<number> {
  if (users.length === 0) {
    return Promise.reject(new Error('There are no users'));
  }

  const user = users.find(u => u.name === name);

  if (!user) {
    return Promise.reject(new Error('User not found!'));
  } else {
    return Promise.resolve(user.ageInMonths);
  }
}
