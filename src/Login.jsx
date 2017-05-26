import React, {Component} from 'react';

import { Modal, Button, FormGroup,FormControl,InputGroup } from 'react-bootstrap';
class Login extends Component{
  constructor(props, context) {
  super(props, context);

  this.state = {
    showModal: false,

      username:null,
      password:null

  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
}
login(){
  const url='https://api.robinhood.com/api-token-auth/'

var formData = new FormData();
formData.append("username",this.state.username);
formData.append("password",this.state.password);
  fetch(url, {
  
  method: 'POST',
  body: formData
}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function() {
  console.log("Booo");
});
}
  open() {
    this.setState({showModal: true});
  }

  close() {
    this.setState({showModal: false});
  }


  componentDidMount() {
this.open();
 }
  render(){



    return (<Modal className="modal fade"     id="login-modal"

     role="dialog"    aria-labelledby="myModalLabel" aria-hidden="true"  show={this.state.showModal}
          onHide={this.close}
          animation={true} >
        	  <div className="modal-dialog">
    				<div className="loginmodal-container">
    					<h1>Login to RobinHood</h1><br/>
                <FormGroup>
                <InputGroup>
    					<FormControl type="text" name="user"
onChange={event => this.setState({username: event.target.value})}
                 placeholder="Username"/>
    					<FormControl type="password"
onChange={event => this.setState({password: event.target.value})}
                name="pass" placeholder="Password"/>
              </InputGroup>
    					<Button onClick={() => this.login()} value="Login"> Login</Button>
    				  </FormGroup>

    				  <div className="login-help">
    					<a href="#">please visit Robinhood for more options</a>
    				  </div>
    				</div>
    			</div>
        </Modal>)
  }
}

export default Login;
