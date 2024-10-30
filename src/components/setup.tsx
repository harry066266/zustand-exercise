import { FC, useEffect, useState } from "react";
import useStore from "@/store";
import {
  incrementBears,
  decrementBearByStep,
  asyncIncrementBears,
  resetBears,
} from "@/store/bearSlice";

import { addBearAndFish } from "@/store/tools/commonActions";
import { resetAllStore } from "@/store/tools/resetters";
export const Father: FC = () => {
  const bears = useStore((state) => state.bears);
  const [bgColor, setBgColor] = useState<"lightgreen" | "lightgray">(
    "lightgreen"
  );
  useEffect(() => {
    const unsubFn = useStore.subscribe(
      (state) => state.fishes,
      (newValue) => {
        setBgColor(newValue >= bears * 5 ? "lightgreen" : "lightgray");
      },
      { fireImmediately: true }
    );
    return () => unsubFn();
  }, [bears]);
  return (
    <div style={{ padding: 0, borderRadius: 5, backgroundColor: bgColor }}>
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
  // const incrementBears = useStore((state) => state.incrementBears);
  // const decrementBearByStep = useStore((state) => state.decrementBearByStep);
  // const asyncIncrementBears = useStore((state) => state.asyncIncrementBears);
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
  // const resetBears = useStore((state) => state.resetBears);
  const reset = () => {
    resetAllStore();
    useStore.persist.clearStorage();
  };
  return (
    <>
      <h5>Son2子组件</h5>
      <button onClick={resetBears}>重置Bears</button>
      <button onClick={addBearAndFish}>同事自增bear和fish</button>
      <button onClick={resetAllStore}>重置所有数据</button>
      <button onClick={reset}>重置所有Store</button>
    </>
  );
};
