import React from "react";
import { useCounterRepositoryImp } from "../data/counterRepositoryImp";
import { useCounterViewModel } from "../controller/counterViewModel";
import { Button, Spinner } from "../../../shared/components/elements";
import { Container, Header } from "../../../shared/components/layouts";

const Counter = () => {
  const repository = useCounterRepositoryImp();
  const { count, decrementCounter, incrementCounter, isLoading, canDecrement } =
    useCounterViewModel(repository);
  return (
    <>
      <Header />
      <Container>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Button onClick={decrementCounter} disabled={!canDecrement}>
              dec
            </Button>
            <span>{count}</span>
            <Button onClick={incrementCounter}>inc</Button>
          </>
        )}
      </Container>
    </>
  );
};

export default Counter;
