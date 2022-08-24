import { useState } from 'react'

import Department from './index'
import RenderSystem from '../system'


const ListRowDepartment = ({ listDepartment }) => {

    const [renderSystem, setRenderSystem] = useState({
        show: false,
        indexItemShow: null,
        data: [],
    })

    console.log('listDepartment', listDepartment);

    const { show, data, indexItemShow } = renderSystem


    const handleOnMouseEnter = () => {
        setRenderSystem({
            ...renderSystem,
            show: true
        })
    }

    const handleUnMouseEnter = () => {
        setRenderSystem({
            show: false,
            indexItemShow: null
        })
    }


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

            {show && <RenderSystem data={data} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleUnMouseEnter}/>}

        </>
    )
}

export default ListRowDepartment