import React, { Component } from "react";
import Groups from "./Groups";
import Users from "./Users";
import Navbar from "./Navbar.js";
import { Row, Col, Container } from "reactstrap";


export default class App extends Component {

  state = {
    currentGroup:"",
    users: [],
  };

  changeGroup = (group) => {
    this.setState({currentGroup: group.groupName});
    this.getUsers(group.id);
  };

  getUsers = (groupId) => {
    let url ="http://localhost:3000/users";
    if (groupId){
      url += "?groupId=" + groupId;
    }

    fetch(url)
    .then((response) => response.json())
    .then((data) => this.setState({users: data}));
  };

  componentDidMount( ){
    this.getUsers();
  }


      render(){
        const links =[
          {title: "Home", url:"/"},
          {title: "Content", url:"/content"},
          {title: "Login", url:"/login"}
        ];

        return (
          <>
          
          <Container>
          <Navbar links={links} />
          <Row>
            
            <Col xs="3">
              <Groups
                changeGroup={this.changeGroup}
                currentGroup={this.state.currentGroup}
              />
            </Col>
            <Col xs="9">
            <Users 
              users={this.state.users}
              currentGroup={this.state.currentGroup}
            />
            </Col>
          </Row>
          
          </Container>
          
          </>
        );
      } 
}


