import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ImgEx1 from "../assets/tazza.jpg"
import ImgEx2 from "../assets/seungriho.jpg"
import ImgEx3 from "../assets/busanhang.jpg"
class AdminBoardClose extends Component {
    render() {
        return (
            <div className="CloseBoard">
                <div className="BoardRequestWrapper">
                <div className="Request">
                    <img src={ ImgEx1 } width={"300rem"} height={"400rem"}/>
                   <h3>타짜</h3>
                   <div className="ButtonWrapper">
                        <Button variant="danger">폐쇄</Button>
                        <Button variant="secondary">사유</Button>
                   </div>
                </div>
                
                <div className="Request">
                    <img src={ ImgEx2 } width={"300rem"} height={"400rem"}/>
                    <h3>승리호</h3>
                    <div className="ButtonWrapper">
                        <Button variant="danger">폐쇄</Button>
                        <Button variant="secondary">사유</Button>
                   </div>
                </div>

                <div className="Request">
                    <img src={ ImgEx3 } width={"300rem"} height={"400rem"}/>
                    <h3>부산행</h3>
                    <div className="ButtonWrapper">
                        <Button variant="danger">폐쇄</Button>
                        <Button variant="secondary">사유</Button>
                   </div>
                </div>
            </div>
            </div>
        );
    };
}

export default AdminBoardClose;