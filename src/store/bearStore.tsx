import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "./tools";
const initBearState = { bears: 0 };
const useBearStore = create<BearStoreType>()(
  immer(
    devtools(
      persist(
        (set) => {
          resetters.push(() => set(initBearState));
          return { ...initBearState };
        },
        {
          name: "bear-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      { name: "bear-store" }
    )
  )
);

export const incrementBears = () =>
  useBearStore.setState((state) => {
    state.bears++;
  });

export const resetBears = () => useBearStore.setState(() => ({ bears: 0 }));

export const decrementBearByStep = (step = 1) =>
  useBearStore.setState((state) => {
    state.bears -= step;
  });

export const asyncIncrementBears = () => {
  setTimeout(() => incrementBears(), 1000);
};

export default useBearStore;
