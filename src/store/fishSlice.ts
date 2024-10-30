import { StateCreator } from "zustand";
import useStore from ".";
import resetters from "./tools/resetters";
const initFishState = {
  fishes: 0,
};
const createFishSlice: StateCreator<FishSliceType> = (set) => {
  resetters.push(() => set(initFishState));
  return {
    ...initFishState,
  };
};

export const incrementFishes = () =>
  useStore.setState((preState) => {
    preState.fishes++;
  });
export const resetFishes = () => useStore.setState({ fishes: 0 });

export default createFishSlice;
