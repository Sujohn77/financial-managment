// LIBRARIES
import React, {Component} from 'react'
import {Route , Switch} from 'react-router-dom';
import {setCurrentUser,initProfile } from "./redux/actions/user";
import { withRouter } from 'react-router-dom';
// COMPONENTS
import {connect} from 'react-redux';
import {compose} from 'redux';
// UTILS
import {defaultCategories} from "./redux/defaultCategories"
import './App.css';

import {initData} from "./common/initChartData";
import { updateChartData } from "./redux/actions/chart";

import { initUsers } from './redux/actions/user';
import {routes} from "./routes";
import Preloader from './common/Preloader';

class App extends Component {
    componentDidMount(){
        if(this.props.history.location.pathname === "/profile" || this.props.history.location.pathname === "/addExpense"  || this.props.history.location.pathname === "/costs"){
            let userState = JSON.parse(localStorage.getItem("user"));
            this.props.setCurrentUser(userState.currentUser);
            let profile = localStorage.getItem("profile-"+userState.currentUser)
            
            if(profile !== null){
                const {currentCategory,categories} = JSON.parse(profile);
                this.props.initProfile(categories,currentCategory);
            } else{
                this.props.initProfile(defaultCategories);
            }
        }
        let user = localStorage.getItem("user");
        if(user !== null){
            this.props.initUsers(JSON.parse(user));
        }
        
        // var handleFile = handleFileSelect(this.props.setState);
        // document.getElementById("files").addEventListener("change", handleFile, false);
    }
    componentDidUpdate(){
        if(this.props.profile){
            this.props.updateChartData(initData(this.props.profile));
        }
    }
    render() {
        if(!this.props.profile && this.props.history.location.pathname !== "/"){
            return <Preloader/>
        }

        return (
                <Switch>
                    {routes.map((route,key)=>{
                        if(route.exact){
                            return <Route key={key} exact path={route.path} render={route.component}/>
                        }
                        else{
                            return <Route key={key} path={route.path} render={route.component}/>
                        }
                    }
                    )}
                </Switch>

        )}
}

const mapStateToProps = state => {
    return {
        currentUser:state.user.currentUser,
        profile:state.profile
    }
  };

export default compose(
    connect(mapStateToProps,{initUsers,initProfile,setCurrentUser,updateChartData}),
    withRouter)
(App);
