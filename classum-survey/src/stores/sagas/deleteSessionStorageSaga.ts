import type { RootState } from "@stores";
import { deleteSessionStorage } from "@utils";

function* deleteSessionStorageSaga(stateName: keyof RootState) {
  yield deleteSessionStorage(stateName);
}

export { deleteSessionStorageSaga };
