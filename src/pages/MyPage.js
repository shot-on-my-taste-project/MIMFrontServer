import React, { useState, useEffect, useCallback } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
import Header from '../component/Header';
import '../styles/MyPage.css'
import { getCookie } from '../utils/Cookie';
import axios from 'axios';
import Api from "../utils/api/userAPI"

const MyPage = () => {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [postings, setPostings] = useState([]);
    const userfun = Api.getUserInfo;
    const postingfun = Api.getUserWrittenPost;
    const profilefun = Api.getUserProfile;

    const test = async () => {
        setUser(await userfun().then((x) => {
            setProfile(`http://fhdufhdu.iptime.org:8081/users/${x.id}/profile`);
            return x;
        }));
        setPostings(await postingfun());
    }

    useEffect(() => {
        test();
    }, []);


    return (
        <div className="MyPageArea">
            <Header></Header>
            <div className="UserInfoWrapper">
                <div className="MainInfo">
                    <img src={profile} width={"150rem"} />
                    <div className="TextInfo">
                        <h1>{user.nickName}</h1>
                        <Link to="/mypage/update">
                            <Button variant="danger">정보 수정</Button>
                        </Link>
                    </div>
                </div>

                <div className="ActivityHistory">
                    <h2>작성한 글</h2>
                    <div className="HistoryWrapper">
                        {postings.map((posting) => <div>{posting.title}</div>)}
                    </div>
                </div>

                <div className="FavoriteMovies">
                    <h2>Movie In Cache Memory</h2>
                    <div className="MovieWrapper">
                        <div className="Movie">
                            <img src={ImgEx1} width={"100rem"} height={"133rem"} />
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/result/detail"><h4>타짜</h4></Link>
                        </div>

                        <div className="Movie">
                            <img src={ImgEx2} width={"100rem"} height={"133rem"} />
                            <h4>승리호</h4>
                        </div>

                        <div className="Movie">
                            <img src={ImgEx3} width={"100rem"} height={"133rem"} />
                            <h4>부산행</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;