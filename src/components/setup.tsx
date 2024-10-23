import { FC } from "react";
import useStore from "@/store";
export const Father: FC = () => {
  const bears = useStore((state) => state.bears);
  return (
    <>
      <h3>Father组件</h3>
      <p>小熊的数量是：{bears}</p>
      <hr />
      <Son1 />
      <hr />
      <Son2 />
    </>
  );
};

export const Son1: FC = () => {
  const incrementBears = useStore((state) => state.incrementBears);
  const decrementBearByStep = useStore((state) => state.decrementBearByStep);
  const asyncIncrementBears = useStore((state) => state.asyncIncrementBears);
  return (
    <>
      <h5>Son1组件</h5>
      <button onClick={incrementBears}>bears+1</button>
      <button onClick={() => decrementBearByStep(5)}>Bear-5</button>
      <button onClick={asyncIncrementBears}>1秒后bears+1</button>
    </>
  );
};

export const Son2: FC = () => {
  const resetBears = useStore((state) => state.resetBears);
  return (
    <>
      <h5>Son2子组件</h5>
      <button onClick={resetBears}>重置Bears</button>
    </>
  );
};
