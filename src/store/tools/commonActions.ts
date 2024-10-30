import useStore from "..";
import { incrementBears } from "../bearSlice";
import { incrementFishes } from "../fishSlice";

export const addBearAndFish = () => {
  const bears = useStore.getState().bears;
  if (bears < 4) {
    incrementBears();
    incrementFishes();
  } else {
    incrementFishes();
  }
};
