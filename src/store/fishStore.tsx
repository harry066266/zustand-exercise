import { create } from "zustand";
import { persist, devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "./tools";

const initFishState = { fishes: 0 };
const useFishStore = create<FishStoreType>()(
  subscribeWithSelector(
    immer(
      devtools(
        persist(
          (set) => {
            resetters.push(() => set(initFishState));
            return {
              ...initFishState,
            };
          },
          { name: "fish-store" }
        ),
        { name: "fish-store" }
      )
    )
  )
);

export const incrementFishes = () =>
  useFishStore.setState((preState) => {
    preState.fishes++;
  });
export const resetFishes = () => useFishStore.setState({ fishes: 0 });

export default useFishStore;
