import React, { Component, useState, useEffect } from 'react'
import Header from '../component/AdminHeader';
import AdminBoardOpen from '../component/AdminBoardOpen';
import AdminBoardClose from '../component/AdminBoardClose';
import CustomSearchArea from '../component/CustomSearchArea';
import Popup from '../component/Popup';
import { Button } from 'react-bootstrap'
import '../styles/Admin.css'
import AdminBoardSearch from '../component/AdminBoardSearch';
import { getCookie, setCookie, removeCookie } from '../utils/Cookie';
import axios from 'axios';
import Api from '../utils/api/userAPI.js';
import PagenationV2 from "../component/PagenationV2.js"

const AdminBoardManage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    
    const [boards, setBoards] = useState([]);
    const [requestBoards, setRequestBoards] = useState([]);
    const [movies, setMovies] = useState([]);

    const getRequests = async () => {
        return await axios.get(`/request-boards?page=${currentPage}&size=3`, {
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
            }
        })
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err);
            });
    }

    //게시판 받아오는 부분
    const getBoards = async () => {
        return await axios.get(`/boards?page=${currentPage}&size=3`, {
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
            }
        })
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err);
            });
    }

    //요청 리스트에 존재하는 영화아이디로 영화 리스트 받아오기
    const getMovies = async (ids) => {
        return await axios.get(`/movies/ids?ids=${ids}`, {
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
            }
        })
            .then(res => {
                return res.data})
            .catch(err => {
                console.log(err);
            });
        
    }

    //승격
    const makeBoard = async (e) => {
        const {id} = e.target;
        return await axios.post(`/request-boards/${id}`, {}, {
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
            }
        })
            .then(res => {
                res.status === 200 ? alert("성공하였습니다.") : alert(res.data.details)
                window.location.reload();
            })
            .catch(err => {
                alert(err)
            });
    }

    //폐쇄
    const closeBoard = async (e) => {
        const {id} = e.target;
        return await axios.delete(`/boards/${id}`, {
            headers: {
                "X-ACCESS-TOKEN": `${getCookie('access-token')}`,
                "X-REFRESH-TOKEN": localStorage.getItem("refresh-token")
            }
        })
            .then(res => {
                res.status === 200 ? alert("성공하였습니다.") : alert(res.data.details)
            })
            .catch(err => {
                alert(err)
            });
    }


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
                        requestBoards = {requestBoards}
                        movies = {movies}
                        makeBoard = {makeBoard}/>
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
                        boards = {boards}
                        movies = {movies}
                        closeBoard = {closeBoard} />
                </div>
            )
        }
    ];

    const tabClickHandler = (index) => {
        setActiveIndex(index);
        setCurrentPage(0);
        setMovies([]);
    }

    const [popupOpen, setPopupOpen] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    }

    const closePopup = () => {
        setPopupOpen(false);
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }  

    const getInfo = async () => {
        if(activeIndex == 0){
            const requests = await getRequests().then((x) => {
                setRequestBoards(x.content);
                setTotalPage(x.totalPages);
                return x;
            })
            setMovies(await getMovies(getIds(requests.content)));
        }
        else{
            const boards_ = await getBoards().then((x)=>{
                setBoards(x.content)
                setTotalPage(x.totalPages)
                return x;
            });
            setMovies(await getMovies(getIds(boards_.content)))
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
                <div className="SubSearchArea">
                    <CustomSearchArea event={openPopup} />
                    <Popup open={popupOpen} close={closePopup}>
                        <AdminBoardSearch />
                    </Popup>
                </div>
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