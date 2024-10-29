import { create } from "zustand";
import { persist, devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "./tools";
const initFamilyState = {
  family: {
    father: "Walt",
    mother: "Skyler",
    son: "Walter Junior",
  },
};
const useFamilyStore = create<FamilyType>()(
  subscribeWithSelector(
    immer(
      // 配置 immer 中间件
      devtools(
        persist(
          (set) => {
            resetters.push(() => set(initFamilyState));
            return {
              ...initFamilyState,
            };
          },
          { name: "family-store" }
        )
      )
    )
  )
);
export default useFamilyStore;

export const updateSonName = (sonName: string) => {
  useFamilyStore.setState((state) => {
    state.family.son = sonName;
  });
};

export const addDaughterName = (daughterName: string) => {
  useFamilyStore.setState((state) => {
    state.family.daughter = daughterName;
  });
};
