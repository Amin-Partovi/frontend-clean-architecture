import { useCallback } from "react";
import { CounterRepository } from "../domain/repository";
import { decrementCounterUseCase, incrementCounterUseCase } from "../useCases";

function useCounterViewModel(repository: CounterRepository) {
  const incrementCounter = useCallback(() => {
    incrementCounterUseCase({
      counter: repository.counter,
      updateCounter: repository.updateCounter,
      setCounter: repository.setCounter,
    });
  }, [repository.updateCounter, repository.setCounter, repository.counter]);

  const decrementCounter = useCallback(() => {
    decrementCounterUseCase({
      counter: repository.counter,
      setCounter: repository.setCounter,
      updateCounter: repository.updateCounter,
    });
  }, [repository.counter, repository.setCounter, repository.updateCounter]);

  return {
    count: repository.counter?.value,
    isLoading:
      typeof repository.counter === "undefined" || repository.isLoading,
    canDecrement: Number(repository.counter?.value) > 0,
    incrementCounter,
    decrementCounter,
  };
}

export { useCounterViewModel };
