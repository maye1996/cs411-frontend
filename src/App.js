import './App.css';
import "./styles/main.bundle.css";
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './component/FooterComponent';
import HeaderComponent from './component/HeaderComponent';
import ListUserComponent from './component/ListUserComponent';
import AddUserComponent from './component/AddUserComponent';
import ListItemComponent from './component/ListItemComponent';
import AddItemComponent from './component/AddItemComponent';
import HomepageComponent from './component/HomepageComponent';
import AdvancedSQL1Component from './component/AdvancedSQL1Component';
import AdvancedSQL2Component from './component/AdvancedSQL2Component';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


function App() {
  return (
    <div>
      {/* <Router>
      <HeaderComponent />
        <div className = "container">
          <Switch>
            <Route exact path = "/" component = {HomepageComponent}></Route>
            <Route path = "/listallusers" component = {ListUserComponent}></Route>
            <Route path = "/add-user" component = {AddUserComponent} ></Route>
            <Route path = "/edit-user/:id" component = {AddUserComponent}></Route>
          </Switch>
        </div>
      <FooterComponent />
      </Router> */}
    <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="users">
                    <NavItem eventKey="listallusers">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Users
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="listallitems">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Items
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="advanced1">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Advanced SQL1
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="advanced2">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Advanced SQL2
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                <Route path="/" exact component={props => <ListUserComponent />} />
                <Route path="/home" component={props => <ListUserComponent />} />
                <Route path="/devices" component={props => <ListUserComponent />} />
                <Route path = "/listallusers" component = {ListUserComponent}></Route>
                <Route path = "/add-user" component = {AddUserComponent} ></Route>
                <Route path = "/edit-user/:id" component = {AddUserComponent}></Route>
                <Route path = "/listallitems" component = {ListItemComponent}></Route>
                <Route path = "/add-item" component = {AddItemComponent} ></Route>
                <Route path = "/edit-item/:id" component = {AddItemComponent}></Route>
                <Route path = "/advanced1" component = {AdvancedSQL1Component}></Route>
                <Route path = "/advanced2" component = {AdvancedSQL2Component}></Route>
            </main>
        </React.Fragment>
    )}
    />
</Router>
    </div>
  );
}

export default App;
