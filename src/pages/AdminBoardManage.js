import React, { Component, useState, useEffect } from 'react'
import Header from '../component/AdminHeader';
import AdminBoardOpen from '../component/AdminBoardOpen';
import AdminBoardClose from '../component/AdminBoardClose';
import CustomSearchArea from '../component/CustomSearchArea';
import Popup from '../component/Popup';
import PagenationV2 from "../component/PagenationV2.js"
import Api from '../utils/api/adminApi'
import '../styles/Admin.css'


const AdminBoardManage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);

    const [boards, setBoards] = useState([]);
    const [requestBoards, setRequestBoards] = useState([]);
    const [movies, setMovies] = useState([]);


    //게시판 요청에서 영화 아이디 추출
    const getIds = (list) => {
        let ids = '';
        list.forEach((x) => {
            ids += `${x.movieId},`
        })
        return ids;
    };

    const tabContArr = [
        {
            tabTitle: (
                <li className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}>개설 요청</li>
            ),
            tabCont: (
                <div>
                    <AdminBoardOpen
                        requestBoards={requestBoards}
                        movies={movies}
                        makeBoard={Api.makeBoard} />
                </div>
            )
        },
        {
            tabTitle: (
                <li className={activeIndex === 1 ? "is-active" : ""} onClick={() => tabClickHandler(1)}>폐쇄</li>
            ),
            tabCont: (
                <div>
                    <AdminBoardClose
                        boards={boards}
                        movies={movies}
                        closeBoard={Api.closeBoard} />
                </div>
            )
        }
    ];

    const tabClickHandler = (index) => {
        setActiveIndex(index);
        setCurrentPage(0);
        setMovies([]);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const getInfo = async () => {
        if (activeIndex === 0) {
            const requests = await Api.getRequests(currentPage).then((x) => {
                setRequestBoards(x.content);
                setTotalPage(x.totalPages);
                return x;
            })
            setMovies(await Api.getMovies(getIds(requests.content)));
        }
        else {
            const boards_ = await Api.getBoards(currentPage).then((x) => {
                setBoards(x.content)
                setTotalPage(x.totalPages)
                return x;
            });
            setMovies(await Api.getMovies(getIds(boards_.content)))
        }
    }

    useEffect(() => {
        getInfo();
    }, [currentPage, activeIndex]);

    return (
        <div>
            <Header></Header>
            <div className="BoardManageThumb">
                <h1>게시판 관리</h1>
            </div>
            <ul className="tabs is-boxed">
                {tabContArr.map((section, index) => {
                    return section.tabTitle
                })}
            </ul>
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

export default AdminBoardManage;