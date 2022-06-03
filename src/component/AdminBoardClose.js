import React from 'react';
import { Button } from 'react-bootstrap';

const AdminBoardClose = (props) => {
    const { boards, movies, closeBoard } = props;

    console.log("close", boards, movies)
    //포스터 url 가져오기
    const getPoster = (movieId) => `http://fhdufhdu.iptime.org:8081/movies/${movieId}/poster`;

    return (
        <div className="CloseBoard">
            <div className="BoardRequestWrapper">
                {boards.length === 0 || movies.length === 0 || boards.length !== movies.length ? "결과 없음" : boards.map((board, idx) => (
                    <div className="Request">
                        <img src={getPoster(movies[idx].id)} width={"300rem"} height={"400rem"} />
                        <h3>{movies[idx].title}</h3>
                        <div className="ButtonWrapper">
                            <Button variant="danger" onClick={closeBoard} id={board.id}>폐쇄</Button>
                            {/* <Button variant="secondary">사유</Button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminBoardClose;