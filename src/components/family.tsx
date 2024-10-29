import { FC, useEffect, useRef } from "react";
import useFamilyStore, {
  updateSonName,
  addDaughterName,
} from "@/store/familyStore";
// import { useShallow } from "zustand/shallow";
export const FamilyWrapper: FC = () => {
  return (
    <>
      <FamilyMembers />
      <hr />
      <FamilyNames />
    </>
  );
};

const FamilyMembers: FC = () => {
  const members = useFamilyStore((state) => state.family);

  useEffect(() => {
    console.log("触发了 FamilyMembers 的渲染");
  });
  return (
    <>
      <h5>小熊的家庭成员：</h5>
      <p>{Object.keys(members).join(", ")}</p>
    </>
  );
};

const FamilyNames: FC = () => {
  const names = useFamilyStore((state) => state.family);
  const ref = useRef<() => void>();
  useEffect(() => {
    // 订阅 Store 中数据的变化
    const unsubFn = useFamilyStore.subscribe(
      (state) => state.family.son,
      (newValue, oldValue) => {
        console.log(`son的新值是：${newValue}；旧值是：${oldValue}`);
      },
      { fireImmediately: true }
    );
    ref.current = unsubFn;
    // 清理函数：组件卸载时，取消订阅
    return () => unsubFn();
  }, []);

  return (
    <>
      <h5>熊熊的名字：</h5>
      <p>{Object.values(names).join(", ")}</p>
      <button onClick={() => updateSonName("zaizai")}>修改son的名字</button>
      <button onClick={() => addDaughterName("Holly")}>添加daughter</button>
      <button onClick={() => ref.current && ref.current()}>取消订阅</button>
    </>
  );
};
