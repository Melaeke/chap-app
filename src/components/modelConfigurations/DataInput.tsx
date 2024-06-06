import PropTypes from "prop-types";
import i18n from "@dhis2/d2-i18n";
import styles from "./styles/Input.module.css";
import React, { useState } from "react";
import { Button, DataTable, DataTableCell, DataTableColumnHeader, DataTableRow, InputField, SingleSelectField, SingleSelectOption, TableBody, TableHead } from "@dhis2/ui";

interface Item {
    name: string;
    code: string;
    description: string;
    valueType: string;
}

const allValueTypes = [
    {
        id: "number",
        value: "Number",
    },
    {
        id: "Text",
        value: "Text",
    },
    {
        id: "POSITIVE_INTEGER",
        value: "Positive integer",
    },
    {
        id: "phoneNumber",
        value: "Phone number",
    },
    {
        id: "GPS",
        value: "GPS",
    }
]

const DataInput = ({ label, title, list, onChange }: any) => {

    const [editableIndex, setEditableIndex] = useState(-1)


    return (
        <div className={styles.container}>
            <Button secondary
                onClick={() => {
                    let temp = [...list]
                    temp.push({ name: "", code: "", description: "", valuetype: "" })
                    onChange(temp)
                }}
            >{i18n.t("Add New")}</Button>
            <h2>{title}</h2>

            <span>{label}</span>
            <DataTable>
                <TableHead>
                    <DataTableRow>
                        <DataTableColumnHeader>
                            {i18n.t("Name")}
                        </DataTableColumnHeader>

                        <DataTableColumnHeader>
                            {i18n.t("Code")}
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            {i18n.t("Description")}
                        </DataTableColumnHeader>

                        <DataTableColumnHeader>
                            {i18n.t("Value type")}
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            {i18n.t("Edit")}
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            {i18n.t("Delete")}
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
                                            value={item.code}
                                            onChange={e => {
                                                let temp = [...list]
                                                temp[index].code = e.value
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
                                            selected={item.valueType}
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
                                    </DataTableCell>
                                    <DataTableCell>
                                        <Button onClick={e => {
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
