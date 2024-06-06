import { useSavedObjectList } from "@dhis2/app-service-datastore";
import { DataStoreConfig } from "../types/DataStoreConfig";
import { useSetRecoilState } from "recoil";
import { DataStoreState } from "../schema/dataStoreSchema";

export const useDataStore = () => {
    const [allUserSavedObjects, { add, update, remove }] = useSavedObjectList({ global: true });
    const setDataStoreState = useSetRecoilState(DataStoreState);


    async function createDataStore(data: DataStoreConfig) {
       await add(data)
    }

    function getDataStore() {
        setDataStoreState(allUserSavedObjects as unknown as DataStoreConfig[])
    }

    function updateDataStore() {
        update()
    }

    function deleteDataStore() {
        remove()
    }

    return {
        createDataStore,
        getDataStore,
        updateDataStore,
        deleteDataStore
    }
}