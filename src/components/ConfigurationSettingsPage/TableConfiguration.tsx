import { Button, DataTable, DataTableCell, DataTableColumnHeader, DataTableRow, TableBody, TableHead } from '@dhis2/ui'
import React from 'react'

function TableConfiguration() {
    return (
        <DataTable>
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader>
                        First name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Last name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Incident date
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Last updated
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Actions
                    </DataTableColumnHeader>
                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow>
                    <DataTableCell>
                        Onyekachukwu
                    </DataTableCell>
                    <DataTableCell>
                        Kariuki
                    </DataTableCell>
                    <DataTableCell>
                        02/06/2007
                    </DataTableCell>
                    <DataTableCell>
                        05/25/1972
                    </DataTableCell>
                    <DataTableCell>
                        <Button onClick={e => { }}>Edit</Button>
                        <Button onClick={e => { }}>Train</Button>
                        <Button onClick={e => { }}>Predict</Button>
                    </DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>
                        Kwasi
                    </DataTableCell>
                    <DataTableCell>
                        Okafor
                    </DataTableCell>
                    <DataTableCell>
                        08/11/2010
                    </DataTableCell>
                    <DataTableCell>
                        02/26/1991
                    </DataTableCell>
                    <DataTableCell>
                        <Button onClick={e => { }}>Edit</Button>
                        <Button onClick={e => { }}>Train</Button>
                        <Button onClick={e => { }}>Predict</Button>
                    </DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>
                        Siyabonga
                    </DataTableCell>
                    <DataTableCell>
                        Abiodun
                    </DataTableCell>
                    <DataTableCell>
                        07/21/1981
                    </DataTableCell>
                    <DataTableCell>
                        02/06/2007
                    </DataTableCell>
                    <DataTableCell>
                        <Button onClick={e => { }}>Edit</Button>
                        <Button onClick={e => { }}>Train</Button>
                        <Button onClick={e => { }}>Predict</Button>
                    </DataTableCell>
                </DataTableRow>
            </TableBody>
        </DataTable>
    )
}

export default TableConfiguration