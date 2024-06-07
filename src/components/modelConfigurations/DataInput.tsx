import PropTypes from "prop-types";
import i18n from "@dhis2/d2-i18n";
import styles from "./styles/Input.module.css";
import React, { useState } from "react";
import { Button, DataTable, DataTableCell, DataTableColumnHeader, DataTableRow, InputField, SingleSelectField, SingleSelectOption, TableBody, TableHead } from "@dhis2/ui";

interface Item {
    name: string;
    code: string;
    description: string;
    resouceType: string;
}

const allValueTypes = [
    {
        id: "DATAELEMENT",
        value: "DATAELEMENT",
    }
]

const DataInput = ({ label, title, list, onChange }: any) => {

    const [editableIndex, setEditableIndex] = useState(-1)


    return (
        <div className={styles.container}>
            <h2>{title}</h2>

            <span>{label}</span>
            <DataTable>
                <TableHead>
                    <DataTableRow>
                        <DataTableColumnHeader>
                            {i18n.t("Name")}
                        </DataTableColumnHeader>

                        <DataTableColumnHeader>
                            {i18n.t("Description")}
                        </DataTableColumnHeader>

                        <DataTableColumnHeader>
                            {i18n.t("Value type")}
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            {i18n.t("Actions")}
                        </DataTableColumnHeader>
                    </DataTableRow>
                </TableHead>
                <TableBody>
                    {
                        list.map((item: Item, index: number) => {
                            return (
                                <DataTableRow key={"dataInputs" + index}>
                                    <DataTableCell>
                                        <InputField
                                            disabled={index !== editableIndex}
                                            value={item.name}
                                            onChange={e => {
                                                let temp = [...list]
                                                temp[index].name = e.value
                                                onChange(temp)
                                            }} />
                                    </DataTableCell>
                                    <DataTableCell>
                                        <InputField disabled={index !== editableIndex}
                                            value={item.description}
                                            onChange={e => {
                                                let temp = [...list]
                                                temp[index].description = e.value
                                                onChange(temp)
                                            }} />
                                    </DataTableCell>
                                    <DataTableCell>
                                        <SingleSelectField
                                            disabled={index !== editableIndex}
                                            placeholder={i18n.t("Select the value type")}
                                            selected={item.resouceType}
                                            onChange={(e) => {
                                                let temp = [...list]
                                                temp[index].valueType = e.selected
                                                onChange(temp)
                                            }}
                                        >
                                            {allValueTypes?.map((d: any) => (
                                                <SingleSelectOption key={d.id} value={d.id} label={d.value} />
                                            ))}
                                        </SingleSelectField>
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Button onClick={e => setEditableIndex(index)}>Edit</Button>
                                        <Button destructive onClick={e => {
                                            let temp = [...list]
                                            temp.splice(index, 1)
                                            onChange(temp)
                                        }}>Delete</Button>
                                    </DataTableCell>
                                </DataTableRow>
                            )
                        })
                    }
                </TableBody>
            </DataTable>
        </div>
    );
};

DataInput.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DataInput;
