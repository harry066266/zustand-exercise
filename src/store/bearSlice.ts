import { StateCreator } from "zustand";
import useStore from ".";
import resetters from "./tools/resetters";
const initBearState = {
  bears: 0,
};
const createBearSlice: StateCreator<BearSliceType> = (set) => {
  resetters.push(() => set(initBearState));
  return {
    ...initBearState,
  };
};

export const incrementBears = () =>
  useStore.setState((preState) => {
    preState.bears++;
  });

export const resetBears = () => useStore.setState(() => ({ bears: 0 }));
export const decrementBearByStep = (step = 1) =>
  useStore.setState((state) => {
    state.bears -= step;
  });
export const asyncIncrementBears = () => {
  setTimeout(
    () => incrementBears(),

    1000
  );
};

export default createBearSlice;
