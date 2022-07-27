import { useContext } from 'react'

import { DepartmentContext } from '../../store/DepartmentContext'

import './styleBody.scss'
import Slide from './slide'
import ListRowDepartment from './department/ListRowDepartment'

const Body = () => {

    const listDepartment = [
        {
            logo: 'NHÂN-SỰ.png',
            name: 'Nhân sự',
            systems: [
                {
                    logoSystem: 'nhansuitem1.png',
                    nameSystem: 'Phần mềm nhân sự',
                    pathSystem: 'https://hr.g-group.com.vn/'
                },
                {
                    logoSystem: 'nhansuitem2l.png',
                    nameSystem: 'Hợp đồng điện tử',
                    pathSystem: 'https://econtractapp.efy.com.vn/login'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },

            ]
        },
        {
            logo: 'hanhchinh.jpg',
            name: 'Hành chính',
            systems: [
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Kênh thông tin nội bộ ',
                    pathSystem: 'https://www.gapowork.vn/'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },

            ]
        },
        {
            logo: 'kinhdoanh.png',
            name: 'Kinh doanh',
            systems: [
                {
                    logoSystem: 'ketoanitem1.jpg',
                    nameSystem: 'CRM',
                    pathSystem: 'https://amisapp.misa.vn/crm/dashboard/main'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },

            ]
        },
        {
            logo: 'pm.png',
            name: 'Quản lý dự án',
            systems: [
                {
                    logoSystem: 'pmitem1.png',
                    nameSystem: 'Phần mềm PS',
                    pathSystem: 'https://ps.vsec.vn/login'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },
            ]
        },
        {
            logo: 'chuyengia.png',
            name: 'Dịch vụ chuyên gia',
            systems: [
                {
                    logoSystem: 'pmitem1.png',
                    nameSystem: 'Phần mềm PS',
                    pathSystem: 'https://ps.vsec.vn/login'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },
            ]
        },
        {
            logo: 'soc.png',
            name: 'SOC',
            systems: [
                {
                    logoSystem: 'socitem1.png',
                    nameSystem: 'Vadar',
                    pathSystem: 'https://vngkib.vadar.vn/app/login?nextUrl=%2F'
                },
                {
                    logoSystem: 'socitem2.png',
                    nameSystem: 'TheHive',
                    pathSystem: 'https://ims.vsec.vn/index.html#!/login'
                },
                {
                    logoSystem: 'socitem3.png',
                    nameSystem: 'Portal ticket',
                    pathSystem: 'https://portal.vsec.com.vn/login'
                },
                {
                    logoSystem: 'socitem4.png',
                    nameSystem: 'MISP',
                    pathSystem: 'https://tip.vsec.vn/'
                },
                {
                    logoSystem: 'socitem5.png',
                    nameSystem: 'safesai',
                    pathSystem: 'https://safesai.com/'
                },
                {
                    logoSystem: 'socitem6.png',
                    nameSystem: 'TheHive_v2',
                    pathSystem: 'https://v2.ims.vsec.vn/index.html#!/alert/list'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },
            ]
        },
        {
            logo: 'ketoan.png',
            name: 'Kế toán',
            systems: [
                {
                    logoSystem: 'ketoanitem1.jpg',
                    nameSystem: 'Misa',
                    pathSystem: 'https://amisapp.misa.vn/home'
                },
                {
                    logoSystem: 'ketoaniteam2.png',
                    nameSystem: 'Hóa đơn',
                    pathSystem: 'https://sso.easyinvoice.vn/account/login?ReturnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3DEasyInvoice%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520email%26state%3DOpenIdConnect.AuthenticationProperties%253DKb9AUWn9HJh7XPHu6YBHUF9EgkCBl1G75oFGGwE0bBCS59KE_a6W8alNuQxq-WuOXJfzBZNf6MT6ec9nGVZFYS-DTwIHYviJTGg1Rmbez9NfDrixSrFyiw0F0_uFiqeYMC1hxcT4KO5tRHvzqserzjGUmffxfdZRpign5IiIP-U%26response_mode%3Dform_post%26nonce%3D637910387976215557.OWI3MjMwYzYtMTMyMi00YjBkLTlkNGUtZGVlMTUzMDg5ZWI1YWFkNzE0N2UtZGJkMC00NDY2LTliMGQtODcxMjM5MzI2YTdl%26redirect_uri%3Dhttps%253A%252F%252F0101724513.easyinvoice.com.vn%252F%26post_logout_redirect_uri%3Dhttps%253A%252F%252F0101724513.easyinvoice.com.vn%252F%26x-client-SKU%3DID_NET45%26x-client-ver%3D5.3.0.0'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'File kế toán',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },
            ]
        },
        {
            logo: 'tech.png',
            name: 'Tech',
            systems: [
                {
                    logoSystem: 'techicon1.png',
                    nameSystem: 'Jira',
                    pathSystem: 'https://techsupport.vsec.vn/'
                },
                {
                    logoSystem: 'techitem2.png',
                    nameSystem: 'VSEC TICKET',
                    pathSystem: 'http://ticket.vsec.vn:8080/'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },
            ]
        },
        {
            logo: 'marketing.png',
            name: 'Marketing',
            systems: [
                {
                    logoSystem: 'mktiem1.png',
                    nameSystem: 'Facebook',
                    pathSystem: 'https://www.facebook.com/vsec.com.vn'
                },
                {
                    logoSystem: 'socitem4.png',
                    nameSystem: 'Website',
                    pathSystem: 'https://vsec.com.vn/trung-tam-giam-sat-van-hanh-attt-soc/'
                },
                {
                    logoSystem: 'mkitem2.png',
                    nameSystem: 'Youtobe',
                    pathSystem: 'https://www.youtube.com/c/VsecvnSecurity'
                },
                {
                    logoSystem: 'mkitem7.png',
                    nameSystem: 'Linkedin',
                    pathSystem: 'https://www.linkedin.com/company/vsec-jsc/posts/?feedView=all'
                },
                {
                    logoSystem: 'mkitem4.png',
                    nameSystem: 'Zalo',
                    pathSystem: 'https://chat.zalo.me/'
                },
                {
                    logoSystem: 'mkitmem3.png',
                    nameSystem: 'Gapo',
                    pathSystem: 'https://www.gapowork.vn/'
                },
                {
                    logoSystem: 'driver.png',
                    nameSystem: 'Drive',
                    pathSystem: 'https://drive.google.com/'
                },
                {
                    logoSystem: 'mkitmem8.png',
                    nameSystem: 'Get response',
                    pathSystem: 'https://www.getresponse.com/'
                },
            ]
        },
    ]

    const { renderLayoutCover, setRenderLayoutCover } = useContext(DepartmentContext)
    const handalUnshowSytem = () => {
        setRenderLayoutCover(false)
    }


    let listRowDepartment = []

    let numberRow

    if (listDepartment.length % 3 === 0) {
        numberRow = listDepartment.length / 3
    } else {
        numberRow = Math.floor(listDepartment.length / 3) + 1
    }

    for (let i = 0; i < numberRow; i++) {
        let RowDepartment = []
        for (let j = 0; j < 3; j++) {
            let department = listDepartment.pop()
            RowDepartment.push(department)
        }
        listRowDepartment.push(RowDepartment)
    }

    return (
        <div className="container">
            <div className="slide">
                <Slide />
            </div>
            <div className="wrap-content">
                <div className="container-content">
                    {
                        listRowDepartment.map((rowDepartment, index) => {
                            return <ListRowDepartment key={index} listDepartment={rowDepartment} />
                        })
                    }
                </div>
            </div>
            {renderLayoutCover && <div className='layout-cover' onClick={handalUnshowSytem}></div>}
        </div>
    )
}

export default Body