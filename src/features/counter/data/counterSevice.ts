import { Counter, create } from "../domain/counterModel";

let count = 0;

function getCounterService(): Promise<Counter> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(create(count));
    }, 1000);
  });
}

function updateCounterService(counter: Counter): Promise<Counter> {
  return new Promise((resolve) => {
    setTimeout(() => {
      count = counter.value;
      resolve(create(count));
    }, 1000);
  });
}

export { getCounterService, updateCounterService };
