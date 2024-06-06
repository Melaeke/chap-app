import React, { useEffect } from 'react'
import { useDataStore } from '../hooks/useDatatStore'

function Initializer({ children }: { children: React.Component }) {
    const { getDataStore } = useDataStore()

    useEffect(() => {
        getDataStore()
    }, [])

    return (
        <>{children}</>
    )
}

export default Initializer