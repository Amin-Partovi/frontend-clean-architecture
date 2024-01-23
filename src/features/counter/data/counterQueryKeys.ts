import { Counter } from "../domain/counterModel";

export const getCounterQueryKey = ["getCounter"];

export const updateCounterQueryKey = (counter: Counter) => [
  "getCounter",
  counter.value,
];
