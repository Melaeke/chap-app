export interface DataStoreConfig {
    name: string
    dataInputs: [
        {
            name: string
            description: string
            valueType: string
            code: string
        }
    ]
    model: string
    Name: string
    description: string
    orgUnitsSelected: string[]
    target: string
    ouLevel: string
    inputPeriodType: string
    outputPeriodType: string
    parameters: any[]
}