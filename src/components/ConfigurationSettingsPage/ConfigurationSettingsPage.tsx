import React, { useState } from 'react'
import i18n from "@dhis2/d2-i18n";
import { Form } from "react-final-form";
import styles from "./style/ConfigModule.module.css";
import DataElement from '../prediction/DataElement';
import OrgUnits from '../prediction/OrgUnits';
import OrgUnitLevel from '../prediction/OrgUnitLevel';
import { Button, IconArrowRight24, IconDownload24, NoticeBox } from '@dhis2/ui';
import InputFieldCustom from '../prediction/InputFieldCustom';

function ConfigurationSettingsPage() {
    const [predictionTarget, setPredictionTarget] = useState(/*{displayName: 'IDSR Malaria', id: 'vq2qO3eTrNi'}*/);
    const [orgUnits, setOrgUnits] = useState([]);
    const [orgUnitLevel, setOrgUnitLevel] = useState<{ id: string, level: number }>();
    const [namePrediction, setnamePrediction] = useState("")
    const [descriptionPrediction, setdescriptionPrediction] = useState("")
    const [model, setmodel] = useState()



    //checks that all selected orgUnits are on the same level
    function orgUnitsSelectedIsValid() {
        if (orgUnits.length === 0) {
            return true;
        }

        const firstElement = (orgUnits[0] as any).path.split("/").length;
        return orgUnits.every(innerArray => (innerArray as any).path.split("/").length === firstElement);
    }

    const isValid = Boolean(
        predictionTarget &&
        (orgUnits.length > 0 || orgUnitLevel == undefined)
    );


    return (
        <div className={styles.container}>
            <h1>{i18n.t("Configuration Settings Module")}</h1>
            <InputFieldCustom
                title={i18n.t("Name of the prediction")}
                label={i18n.t("Name")}
                value={""}
                onChange={() => { }}
            />
            <InputFieldCustom
                title={i18n.t("Description of the prediction")}
                label={i18n.t("Description")}
                value={""}
                onChange={() => { }}
            />
            <DataElement
                title={i18n.t("Models of the prediction")}
                label={i18n.t("Select the model")}
                selected={{}}
                onChange={() => { }}
            />
            <DataElement
                title={i18n.t("Prediction target")}
                label={i18n.t("Select data element")}
                selected={predictionTarget}
                onChange={setPredictionTarget}
            />
            <OrgUnits orgUnits={orgUnits} setOrgUnits={setOrgUnits} />
            {!orgUnitsSelectedIsValid() && <p className={styles.error}>Only select organization units that are one the same level.</p>}
            <OrgUnitLevel
                orgUnitLevels={orgUnitLevel}
                onChange={setOrgUnitLevel}
            />

            <div className={styles.notice}>
                <NoticeBox warning title={`The fields bellow is related to the ${model ?? "model"}`}>
                    Fill the fields bellow to be able to predict
                </NoticeBox>
            </div>


            <div className={styles.buttons}>
                <Button
                    icon={<IconDownload24 />}
                    loading={false}
                    disabled={!isValid || !orgUnitsSelectedIsValid()}
                    onClick={() => { }}
                >
                    Download data
                </Button>
                <Button
                    icon={<IconArrowRight24 />}
                    primary
                    loading={false}
                    disabled={!isValid || !orgUnitsSelectedIsValid()}
                    onClick={() => { }}
                >
                    Send data to CHAP
                </Button>
            </div>
        </div>
    )
}

export default ConfigurationSettingsPage