import React, { useState } from 'react'
import i18n from "@dhis2/d2-i18n";
import { Form } from "react-final-form";
import styles from "./style/ConfigModule.module.css";
import TableConfiguration from './TableConfiguration';
import { Button } from '@dhis2/ui';
import ConfigurationSettingsForm from './ConfigurationSettingsForm';

function ConfigurationSettingsPage() {
    const [state, setstate] = useState(false)

    return (
        <div className={styles.container}>
            <h1>{i18n.t("Preditions")}</h1>
            <Button
                primary
                onClick={() => setstate(!state)}
            >
                {!state ? "Add New" : "List Settings"}
            </Button>
            {!state ?
                <TableConfiguration />
                :
                <ConfigurationSettingsForm />
            }
        </div>
    )
}

export default ConfigurationSettingsPage