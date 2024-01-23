import { useMutation, useQuery } from "@tanstack/react-query";
import { getCounterQueryKey, updateCounterQueryKey } from "./counterQueryKeys";
import { getCounterService, updateCounterService } from "./counterSevice";
import { Counter } from "../domain/counterModel";
import { CounterRepository } from "../domain/repository";
import { useEffect, useState } from "react";

export const useCounterRepositoryImp = (): CounterRepository => {
  const [counter, setCounter] = useState<Counter>();
  const useLoadCounter = () => {
    return useQuery({
      queryKey: getCounterQueryKey,
      queryFn: getCounterService,
    });
  };

  const { data, isLoading } = useLoadCounter();

  useEffect(() => {
    setCounter(data);
  }, [data]);

  const useUpdateCounter = (counter: Counter) => {
    return useMutation({
      mutationFn: () => updateCounterService(counter),
    });
  };

  const { mutate: updateCounter, isPending } = useUpdateCounter(
    counter as Counter
  );

  return {
    counter,
    isLoading: isLoading,
    isUpdating: isPending,
    updateCounter: updateCounter as any,
    setCounter,
  };
};
