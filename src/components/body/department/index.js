const Department = ({ logo, name, index, none, systems, setRenderSystem }) => {

    const handleOnMouseEnter = () => {
        setRenderSystem({
            show: true,
            indexItemShow: index,
            data: systems,
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
            <div className="wrap-department-item">
                <div className={`department-item ${none}`} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleUnMouseEnter}>
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