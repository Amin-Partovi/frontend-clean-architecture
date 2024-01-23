import debounce from "lodash.debounce";
import { decrement } from "../domain/counterModel";
import { CounterRepository } from "../domain/repository";

export type DecrementCounterRepository = Pick<
  CounterRepository,
  "counter" | "updateCounter" | "setCounter"
>;

export const debounceTask = debounce(
  (task: Function) => Promise.resolve(task()),
  500
);

export const decrementCounterUseCase = (
  repository: DecrementCounterRepository
) => {
  const updatedCounter = repository.counter
    ? decrement(repository.counter)
    : repository.counter;

  if (!updatedCounter || repository.counter?.value === updatedCounter?.value)
    return;

  repository.setCounter(updatedCounter);
  return debounceTask(() => repository.updateCounter(updatedCounter));
};
