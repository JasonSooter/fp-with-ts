function addDelayToMessage(msg: string, ms: number) {
  return () => {
    setTimeout(() => {
      console.log('msg', msg);
    }, ms);
  };
}

// Prints 'Hello world!' (after 2 seconds)
addDelayToMessage('Hello world!', 2000)();

function addDelay(func: () => void, ms: number) {
  return () => {
    setTimeout(() => {
      func();
    }, ms);
  };
}

function sayHello() {
  console.log('Hello world!');
}

const delayedSayHello = addDelay(sayHello, 500);
delayedSayHello(); // Prints 'Hello world!' (after 500 ms)
