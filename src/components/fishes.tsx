import { FC } from "react";
import useStore from "@/store";
import { incrementFishes, resetFishes } from "@/store/fishSlice";
export const Fishes: FC = () => {
  const fishes = useStore((state) => state.fishes);
  // const incrementfish = useStore((state) => state.incrementFishes);
  // const resetFishes = useStore((state) => state.resetFishes);
  return (
    <>
      <h5>小鱼干的数量是：{fishes}</h5>
      <button onClick={incrementFishes}>小鱼干数量+1</button>
      <button onClick={resetFishes}>重置小鱼干数量</button>
    </>
  );
};
