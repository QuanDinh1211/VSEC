import { useState, useContext, useEffect } from 'react'

import { DepartmentContext } from '../../../store/DepartmentContext'

import Department from './index'
import RenderSystem from '../system'


const ListRowDepartment = ({ listDepartment }) => {

    const [renderSystem, setRenderSystem] = useState({
        show: false,
        indexItemShow: null,
        data: [],
    })

    const { renderLayoutCover } = useContext(DepartmentContext)

    const { show, data, indexItemShow } = renderSystem


    useEffect((renderSystem) => {
        if (!renderLayoutCover) {
            setRenderSystem({
                ...renderSystem,
                indexItemShow: null,
                show: false,
            })
        }
    }, [renderLayoutCover])

    return (
        <>
            <div className="row-department">
                {
                    listDepartment.map((department, index) => {
                        const { logo, name, systems } = department

                        if (!indexItemShow) {
                            return <Department key={index} index={index + 1} logo={logo} name={name} systems={systems} setRenderSystem={setRenderSystem} />
                        }
                        if (indexItemShow && indexItemShow === index + 1) {
                            return <Department key={index} index={index + 1} logo={logo} name={name} systems={systems} setRenderSystem={setRenderSystem} />
                        } else {
                            return <Department key={index} index={index + 1} none={'none'} logo={logo} name={name} systems={systems} setRenderSystem={setRenderSystem} />
                        }
                    })
                }
            </div>

            {renderLayoutCover && show && <RenderSystem data={data} />}

        </>
    )
}

export default ListRowDepartment