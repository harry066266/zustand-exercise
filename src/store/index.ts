import { create } from "zustand";

const useStore = create<BearType>()((set, get) => {
  return {
    bears: 0,
    incrementBears: () => set((preState) => ({ bears: preState.bears + 1 })),
    resetBears: () => set(() => ({ bears: 0 })),
    decrementBearByStep: (step = 1) =>
      set((state) => ({ bears: (state.bears -= step) })),
    asyncIncrementBears: () => {
      setTimeout(
        () => get().incrementBears(),

        1000
      );
    },
  };
});

export default useStore;
