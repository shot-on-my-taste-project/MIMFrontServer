import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
class AdminBoardOpen extends Component {
    render() {
        return (
            <div className="OpenBoard">
                <div className="BoardRequestWrapper">
                    <div className="Request">
                        <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                        <h3>타짜</h3>
                        <Button variant="danger">게시판 개설</Button>
                    </div>
                    
                    <div className="Request">
                        <img src={ ImgEx2 } width={"300rem"} height={"400rem"}/>
                        <h3>승리호</h3>
                        <Button variant="danger">게시판 개설</Button>
                    </div>

                    <div className="Request">
                        <img src={ ImgEx3 } width={"300rem"} height={"400rem"}/>
                        <h3>부산행</h3>
                        <Button variant="danger">게시판 개설</Button>
                    </div>
                </div>
            </div>
        );
    };
}

export default AdminBoardOpen;