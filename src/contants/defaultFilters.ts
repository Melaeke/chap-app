import { Attribute } from "../types/models";

[
    {
        name: "Name of the prediction",
        disabeed: false,
        valueType: Attribute.valueType.TEXT,
        options: undefined,
        id: "name"
    },
    {
        name: "Description of the prediction",
        disabeed: false,
        valueType: Attribute.valueType.TEXT,
        options: undefined,
        id: "description"
    },
    {
        name: "Select the model",
        disabeed: false,
        valueType: Attribute.valueType.TEXT,
        options: undefined,
        id: "model"
    },
    {
        name: "Select the target",
        disabeed: false,
        valueType: Attribute.valueType.LIST,
        options: undefined,
        id: "target"
    },
    {
        name: "Select organisation units",
        disabled: false,
        valueType: Attribute.valueType.ORGANISATION_UNIT,
        option: undefined,
        id: "orgUnitsSelected"
    },
    {
        name: "Organisation unit level",
        disabeed: false,
        valueType: Attribute.valueType.LIST,
        options: undefined,
        id: "ouLevel"
    }
]