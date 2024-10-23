/// <reference types="vite/client" />
type BearType = {
  bears: number;
  incrementBears: () => void;
  resetBears: () => void;
  decrementBearByStep: (step?: number) => void;
  asyncIncrementBears: () => void;
};
