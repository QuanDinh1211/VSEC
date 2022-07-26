import './style-header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className='header-img'>
                <img src={require('../../acsess/img/VSEC.png')} alt='' />
            </div>
            <div className='header-support'>
                <i className='pointer'><a href='http://ticket.vsec.vn:8080/'>Hỗ trợ kỹ thuật</a></i>
            </div>
        </div>
    )
}

export default Header