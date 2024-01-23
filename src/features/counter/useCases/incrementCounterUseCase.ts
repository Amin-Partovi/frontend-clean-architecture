import debounce from "lodash.debounce";
import { increment } from "../domain/counterModel";
import { CounterRepository } from "../domain/repository";

export type IncrementCounterRepository = Pick<
  CounterRepository,
  "counter" | "updateCounter" | "setCounter"
>;

export const debounceTask = debounce(
  (task: Function) => Promise.resolve(task()),
  500
);

export const incrementCounterUseCase = (
  repository: IncrementCounterRepository
) => {
  const updatedCounter = repository.counter
    ? increment(repository.counter)
    : repository.counter;

  if (!updatedCounter || repository.counter?.value === updatedCounter?.value)
    return;

  repository.setCounter(updatedCounter);
  return debounceTask(() => repository.updateCounter(updatedCounter));
};
