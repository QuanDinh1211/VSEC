import { useState, createContext } from 'react'

export const DepartmentContext = createContext()

const DepartmentContextProvider = ({ children }) => {

    const [renderLayoutCover, setRenderLayoutCover] = useState(false)

    const DepartmentContextData = { renderLayoutCover, setRenderLayoutCover }

    return (
        <DepartmentContext.Provider value={DepartmentContextData}>
            {children}
        </DepartmentContext.Provider>
    )
}

export default DepartmentContextProvider