import React, {Component} from 'react';
import Signup from '../child-components/signup';


class Login extends Component {

    render() {
      return(
        
      <div className="Login">
          <Signup/>
          <p>from login</p>



      </div>);
    }
}

export default Login;