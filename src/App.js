import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import UserFeed from './components/UserFeed'
import HomePage from './components/HomePage'
import MainMenu from './components/MainMenu'
import Task from './components/Task'
import Service from './components/Service'
import UserProfile from './components/UserProfile'
import UserServices from './components/UserServices'
import AddUserServiceForm from './components/AddUserServiceForm'
import UserTasks from './components/UserTasks'
import SingleTaskPage from './components/SingleTaskPage'
import AddUserTasksForm from './components/AddUserTasksForm'
import ChatRoom from './components/ChatRoom'
// import Footer from './components/Footer'
import Zanatlije from './components/Zanatlije'
import ZanatlijaProfile from './components/ZanatlijaProfile'
import Signin from './components/registration/Signin'
import Login from './components/registration/Login'
import Offers from './components/Offers'
import * as actionCreator from './store/actions/userActions'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.compat.css'

function App(props) {

  let userToken = localStorage.getItem('userToken');
  useEffect(() => {
    if (userToken) {
      props.getMyData()
    }
    return
    /* eslint-disable-next-line */
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <ReactNotification />
        <MainMenu />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/signin' component={Signin} />
          <Route path='/Offers' component={Offers} />
          <Route path='/login' component={Login} />
          <Route path='/userFeed' component={UserFeed} />
          <Route path='/zanatlije' component={Zanatlije} />
          <Route path='/zanatlijaProfilePreview/:id' component={ZanatlijaProfile} />
          <Route path='/task/:id' component={Task} />
          <Route path='/singleTaskPage/:id' component={SingleTaskPage} />
          <Route path='/service/:id' component={Service} />
          <Route path='/chatRoom/:id' component={ChatRoom} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/userServices' component={UserServices} />
          <Route path='/userTasks' component={UserTasks} />
          <Route path='/addUserServiceForm' component={AddUserServiceForm} />
          <Route path='/addUserTasksForm' component={AddUserTasksForm} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    authUser: state.userReducer.authUser
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) => dispatch(actionCreator.loginUser({ email, password })),
    getMyData: () => dispatch(actionCreator.getMyData()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

