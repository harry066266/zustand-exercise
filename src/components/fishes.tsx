import { FC } from "react";
import useFishStore, { incrementFishes, resetFishes } from "@/store/fishStore";
export const Fishes: FC = () => {
  const fishes = useFishStore((state) => state.fishes);
  // const incrementfish = useFishStore((state) => state.incrementFishes);
  // const resetFishes = useFishStore((state) => state.resetFishes);
  return (
    <>
      <h5>小鱼干的数量是：{fishes}</h5>
      <button onClick={incrementFishes}>小鱼干数量+1</button>
      <button onClick={resetFishes}>重置小鱼干数量</button>
    </>
  );
};
