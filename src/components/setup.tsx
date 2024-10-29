import { FC, useEffect, useState } from "react";
import useBearStore, {
  incrementBears,
  decrementBearByStep,
  asyncIncrementBears,
  resetBears,
} from "@/store/bearStore";
import { resetAllStore } from "@/store/tools";
import useFishStore from "@/store/fishStore";
export const Father: FC = () => {
  const bears = useBearStore((state) => state.bears);
  const [bgColor, setBgColor] = useState<"lightgreen" | "lightgray">(
    "lightgray"
  );
  useEffect(() => {
    const unSubFn = useFishStore.subscribe(
      (state) => state.fishes,
      (newValue) => setBgColor(newValue >= 5 ? "lightgreen" : "lightgray"),
      { fireImmediately: true }
    );

    return () => unSubFn();
  }, []);
  return (
    <div style={{ padding: 10, borderRadius: 5, background: bgColor }}>
      <h3>Father组件</h3>
      <p>小熊的数量是：{bears}</p>
      <hr />
      <Son1 />
      <hr />
      <Son2 />
    </div>
  );
};

export const Son1: FC = () => {
  // const incrementBears = useBearStore((state) => state.incrementBears);
  // const decrementBearByStep = useBearStore(
  //   (state) => state.decrementBearByStep
  // );
  // const asyncIncrementBears = useBearStore(
  //   (state) => state.asyncIncrementBears
  // );
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
  // const resetBears = useBearStore((state) => state.resetBears);

  return (
    <>
      <h5>Son2子组件</h5>
      <button onClick={resetBears}>重置Bears</button>
      <button onClick={resetAllStore}>重置全部数据</button>
    </>
  );
};
