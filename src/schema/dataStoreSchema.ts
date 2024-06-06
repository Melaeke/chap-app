import { atom } from "recoil"
import { DataStoreConfig } from "../types/DataStoreConfig"

export const DataStoreState = atom<DataStoreConfig[]>({
    key: "dataStore-state",
    default: []
})
