import { Button, DataTable, DataTableCell, DataTableColumnHeader, DataTableRow, TableBody, TableHead } from '@dhis2/ui'
import React from 'react'

function TableModel() {
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
                    </DataTableCell>
                </DataTableRow>
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
                    </DataTableCell>
                </DataTableRow>
            </TableBody>
        </DataTable>
    )
}

export default TableModel