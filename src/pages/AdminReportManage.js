import React, { useState } from 'react'
import Header from '../component/AdminHeader';
import { Button } from 'react-bootstrap'
const AdminReportManage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const tabContArr = [
        {
            tabTitle: (
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>게시글 신고</li>
            ),
            tabCont: (
                <div>탭1 내용</div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>댓글 신고</li>
            ),
            tabCont: (
                <div>탭2 내용</div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}>게시판 신고</li>
            ),
            tabCont: (
                <div>탭3 내용</div>
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
                <div className="SubSearchArea">
                    <input type="text"/><Button>검색</Button>
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

export default AdminReportManage;