import { useContext } from 'react'

import { DepartmentContext } from '../../../store/DepartmentContext'

const Department = ({ logo, name, index, none, systems, setRenderSystem }) => {

    const { setRenderLayoutCover } = useContext(DepartmentContext)


    const handleOnMouseEnter = () => {
        setRenderSystem({
            show: true,
            indexItemShow: index,
            data: systems,
        })
        setRenderLayoutCover(true)
    }

    return (
        <>
            <div className="wrap-department-item">
                <div className={`department-item ${none}`} onMouseEnter={handleOnMouseEnter}>
                    <div className="logo-department">
                        <img src={require(`../../../acsess/img/${logo}`)} alt='' />
                    </div>
                    <div className="name-department">
                        <span>{name}</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Department