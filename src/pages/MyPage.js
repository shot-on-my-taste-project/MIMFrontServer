import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Header from '../component/Header';
import '../styles/MyPage.css'
import Api from "../utils/api/userAPI"

const MyPage = () => {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [postings, setPostings] = useState([]);
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const userfun = Api.getUserInfo;
    const postingfun = Api.getUserWrittenPost;
    const favoritemoviefun = Api.getFavoriteMovie;

    //포스터 url 가져오기
    const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;

    const getInfo = async () => {
        setUser(await userfun().then((x) => {
            setProfile(`http://fhdufhdu.iptime.org:8081/users/${x.id}/profile`);
            return x;
        }));
        setPostings(await postingfun(0, 5));
        setFavoriteMovies(await favoritemoviefun(0, 3));
    }

    useEffect(() => {
        getInfo();
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
                        {favoriteMovies.map((fm) => 
                            <div className="Movie">
                                <img src={getPoster(fm.id)} width={"100rem"} height={"133rem"} />
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/result/detail/"><h4>{fm.title}</h4></Link>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;