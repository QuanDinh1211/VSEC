import './styleFooter.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-body'>
                <div className='footer-item address'>
                    <span>Trụ sở: 275, Nguyễn Trãi, Quận Thanh Xuân, Hà Nội</span>
                    <span>Chi Nhánh: 421, Nguyễn Thị Minh Khai, Quân 3, TP.HCM</span>
                </div>
                <div className='footer-item'>
                    <div className='phone-email'>
                        <i className="fas fa-phone"></i>
                        <span>1800 2056</span>
                    </div>
                    <div className='phone-email'>
                        <i className="far fa-envelope"></i>
                        <span>contac@vsec.com.vn</span>
                    </div>
                </div>
                <div className='footer-item logo-inter'>
                    <a href='https://www.facebook.com/vsec.com.vn'>
                        <div className='item-inter facebook'>
                            <i className="fab fa-facebook"></i>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/authwall?trk=qf&original_referer=https://vsec.com.vn/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvsec-jsc'>
                        <div className='item-inter'>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </a>
                    <a href='https://www.youtube.com/channel/UCkMSdX_cMNjEtryOql4vVag'>
                        <div className='item-inter'>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer