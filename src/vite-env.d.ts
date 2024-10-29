/// <reference types="vite/client" />
type BearStoreType = {
  bears: number;
  // incrementBears: () => void;
  // resetBears: () => void;
  // decrementBearByStep: (step?: number) => void;
  // asyncIncrementBears: () => void;
};

type FishStoreType = {
  fishes: number;
  // incrementFishes: () => void;
  // resetFishes: () => void;
};

type FamilyType = {
  family: {
    father: string;
    mother: string;
    son: string;
    daughter?: string;
  };
};
