import React, { Component, useState } from 'react'
import Header from '../component/AdminHeader';
import AdminBoardOpen from '../component/AdminBoardOpen';
import AdminBoardClose from '../component/AdminBoardClose';
import CustomSearchArea from '../component/CustomSearchArea';
import Popup from '../component/Popup';
import { Button } from 'react-bootstrap'
import '../styles/Admin.css'
import AdminBoardSearch from '../component/AdminBoardSearch';

const AdminBoardManage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabContArr = [
        {
            tabTitle: (
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>개설 요청</li>
            ),
            tabCont: (
                <div><AdminBoardOpen/></div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>폐쇄 요청</li>
            ),
            tabCont: (
                <div><AdminBoardClose/></div>
            )
        }
    ];

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    }

    const [ popupOpen, setPopupOpen ] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    }
    
    const closePopup = () => {
        setPopupOpen(false);
    }
    
    return (
        <div>
            <Header></Header>
            <div className="BoardManageThumb">
                <h1>게시판 관리</h1>
                <div className="SubSearchArea">
                <CustomSearchArea event={openPopup}/>
                    <Popup open={popupOpen} close={closePopup}>
                        <AdminBoardSearch />
                    </Popup>
                </div>
            </div>
            <ul className="tabs is-boxed">
                {tabContArr.map((section, index)=>{
                    return section.tabTitle
                })}
            </ul>
            <div>
                {tabContArr[activeIndex].tabCont}
            </div>
        </div>
    );
};

export default AdminBoardManage;