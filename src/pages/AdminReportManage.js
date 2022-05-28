import React, { useState, useEffect } from 'react'
import Header from '../component/AdminHeader';
import AdminReportBoard from '../component/AdminReportBoard';
import AdminReportReply from '../component/AdminReportReply';
import AdminReportPost from '../component/AdminReportPost';
import PagenationV2 from "../component/PagenationV2.js"
import PostingReportTable from '../component/PostingReportTable';
import CommentReportTable from '../component/CommentReportTable';
import Api from '../utils/api/adminApi'
import { Button } from 'react-bootstrap'
import { AxiosError } from 'axios';

const AdminReportManage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1)

    const [postingReports, setPostingReports] = useState([]);

    const [commentReports, setCommentReports] = useState([]);


    const tabContArr = [{
        tabTitle: (
            <li className={activeIndex === 0 ? "is-active" : ""}
                onClick={() => tabClickHandler(0)} > 게시글 신고 </li>
        ),
        tabCont: (
            <div>
                <PostingReportTable
                    reports={postingReports}
                    buttonHandler={Api.confirmPostingReport}
                />
            </div>
        )
    },
    {
        tabTitle: (
            <li className={activeIndex === 1 ? "is-active" : ""}
                onClick={() => tabClickHandler(1)}> 댓글 신고
            </li>
        ),
        tabCont: (
            <div>
                <CommentReportTable
                    reports={commentReports}
                    buttonHandler={Api.confirmCommentReport}
                />
            </div>
        )
    }
    ];

    const tabClickHandler = (index) => {
        setActiveIndex(index);
        setCurrentPage(0);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const getInfo = async () => {
        if (activeIndex === 0) {
            await Api.getPostingReport(currentPage).then((x) => {
                setPostingReports(x.content);
                setTotalPage(x.totalPages);
            });
        }
        else {
            await Api.getCommentReport(currentPage).then((x) => {
                setCommentReports(x.content);
                setTotalPage(x.totalPages);
            });
        }
    }

    useEffect(() => {
        getInfo();
    }, [activeIndex, currentPage]);

    return (
        <div>
            <Header ></Header>
            <div className="BoardManageThumb" >
                <h1> 신고 관리 </h1>
            </div>
            <ul className="tabs is-boxed" > {
                tabContArr.map((section, index) => {
                    return section.tabTitle
                })
            } </ul>
            <div>
                {tabContArr[activeIndex].tabCont}
            </div>
            <PagenationV2
                currentPage={currentPage}
                totalPage={totalPage}
                onPageChange={handlePageChange}
            ></PagenationV2>
        </div>
    );
};

export default AdminReportManage;