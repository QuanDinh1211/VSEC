

const RenderSystem = ({ data, onMouseEnter, onMouseLeave }) => {
    return (
        <div className='render-systems' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                data.map((item, index) => {
                    const { logoSystem, nameSystem, pathSystem } = item
                    let none = 'none'
                    if (index % 2 === 0) {
                        none = ''
                    }
                    if (data.length % 2 !== 0 && index === data.length - 1) {
                        none = 'none'
                    }

                    return (
                        <div key={index} className='system-item'>
                            <div className="system-logo">
                                <img src={require(`../../../acsess/img/${logoSystem}`)} alt='' />
                            </div>
                            <div className="system-name">
                                <a href={pathSystem}><span>{nameSystem}</span></a>
                            </div>
                            <div className={`system-boder ${none}`}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RenderSystem