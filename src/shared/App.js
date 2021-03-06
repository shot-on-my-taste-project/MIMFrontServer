import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from '../component/Menu';
import { Home, About, Login, SignUp, Result, ResultDetail, MyPage, MyPageUpdate, 
    CommunityMain, CommunityMovie, CommunityFree, BoardWrite, FreeBoardWrite,
     PostMovie, PostFree, BoardUpdate, FreeBoardUpdate, BoardReport, FreeBoardReport,
    AdminBoardManage, AdminMovieManage, AdminReportManage } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import '../styles/Common.css'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={ Home }/>
                <Route path="/Login" component={ Login }/>
                <Route path="/signup" component={ SignUp }/>
                <Switch>
                    <Route path="/mypage/update" component={ MyPageUpdate }/>
                    <Route path="/mypage" component={ MyPage }/>                
                </Switch>
                <Switch>
                    <Route path="/result/detail/:movieId" component={ ResultDetail }/>
                    <Route path="/scene" component={ Result }/>
                    <Route path="/line" component={ Result }/>
                </Switch>
                <Switch>
                    <Route path="/community/movie/:movieId/report/:postId" component={ BoardReport }/>
                    <Route path="/community/movie/:movieId/update/:postId" component={ BoardUpdate }/>
                    <Route path="/community/movie/write/:movieId" component={ BoardWrite }/>
                    <Route path="/community/movie/:movieId/:postId" component={ PostMovie }/>
                    <Route path="/community/movie/:movieId" component={ CommunityMovie }/>
                    <Route path="/community/free/report/:postId" component={ FreeBoardReport }/>
                    <Route path="/community/free/update/:postId" component={ FreeBoardUpdate }/>
                    <Route path="/community/free/write" component={ FreeBoardWrite }/>
                    <Route path="/community/free/:postId" component={ PostFree }/>
                    <Route path="/community/free" component={ CommunityFree }/>
                    <Route path="/community" component={ CommunityMain }/>
                </Switch>
                <Switch>
                    <Route path="/admin/board" component={ AdminBoardManage }/>
                    <Route path="/admin/report" component={ AdminReportManage }/>
                    <Route path="/admin/movie" component={ AdminMovieManage }/>
                </Switch>
            </div>
        );
    }
}

export default App;