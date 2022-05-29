import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from '../component/Menu';
import { Home, About, Login, SignUp, Result, ResultDetail, MyPage, MyPageUpdate, 
    CommunityMain, CommunityMovie, CommunityFree, BoardWrite, FreeBoardWrite, PostMovie, PostFree,
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
                    <Route path="/result" component={ Result }/>
                </Switch>
                <Switch>
                    <Route path="/community/movie/write/:movieId" component={ BoardWrite }/>
                    <Route path="/community/movie/:movieId/:postId" component={ PostMovie }/>
                    <Route path="/community/movie/:movieId" component={ CommunityMovie }/>
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