import React, { useState } from 'react'
import Header from '../component/AdminHeader';
import AdminReportBoard from '../component/AdminReportBoard';
import AdminReportReply from '../component/AdminReportReply';
import AdminReportPost from '../component/AdminReportPost';
import { Button } from 'react-bootstrap'
const AdminReportManage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabContArr = [
        {
            tabTitle: (
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>게시글 신고</li>
            ),
            tabCont: (
                <div><AdminReportBoard/></div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>댓글 신고</li>
            ),
            tabCont: (
                <div><AdminReportReply/></div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}>게시판 신고</li>
            ),
            tabCont: (
                <div><AdminReportPost/></div>
            )
        }
    ];

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    }

    return (
        <div>
            <Header></Header>
            <div className="BoardManageThumb">
                <h1>신고 관리</h1>
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

export default AdminReportManage;