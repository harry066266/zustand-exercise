import { create } from "zustand";
import createFishSlice from "./fishSlice";
import createBearSlice from "./bearSlice";
import {
  persist,
  createJSONStorage,
  devtools,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
const useStore = create<BearSliceType & FishSliceType>()(
  subscribeWithSelector(
    immer(
      // 配置 immer 中间件
      devtools(
        persist(
          (...a) => {
            return {
              ...createBearSlice(...a),
              ...createFishSlice(...a),
            };
          },
          {
            name: "store",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => {
              const keys = ["fishes", "bears"];
              const selectedEntries = Object.entries(state).filter((entry) =>
                keys.includes(entry[0])
              );
              return Object.fromEntries(selectedEntries);
            },
          }
        ),
        { name: "app-store" }
      )
    )
  )
);

export default useStore;
