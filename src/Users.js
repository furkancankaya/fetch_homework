import { Component } from "react";
import { Card, CardBody, CardGroup, CardImg, CardTitle, Button, CardText, Col } from "reactstrap";
export default class Users extends Component{
   
    state={
        currentUser: "",
        };

        changeCurrentProduct = (user) =>{
            this.setState({currentUser: user.userName})
        };

       

    render(){
        const {users} = this.props;

        
        return(
            <>
            <h1>{this.props.currentGroup}</h1>
            <CardGroup>
                {users.map((user) => (
                <Col xs="3">
                <Card 
                style={{marginLeft: "10px", marginRight: "10px"}}
                key={user.id} onClick={() => this.changeCurrentProduct(user)}>
                    <CardImg top width="100%" src={user.image} alt={user.userName} />
                    <CardBody>
                         <CardTitle>{user.userName}</CardTitle>
                         
                        <CardText>{user.desc}</CardText>
                        <Button>Select</Button>
                     </CardBody>
                </Card>
                </Col>
                ))}
          </CardGroup>
          <br/>
          <br/>
          <br/>
          <h1>Selected User</h1>
          <h2>{this.state.currentUser}</h2>
          </>
        )
    }
}