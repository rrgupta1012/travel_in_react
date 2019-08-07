import React ,{Component} from 'react';
// import {link} from 'react-router-dom';
import './signin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const initialState =  {
    email:"",
    password:"",
    login_error: "",
}

class Signin extends Component {

    constructor(props){
        super(props);
        this.state = initialState

    }

    handleChangeAll = (event) =>{
        // this.setState({confirm_password : event.target.value})
        // console.log("event",event.target.value)
        this.setState( { [event.target.name] : event.target.value } )
    }

    hanlesubmit = (event) => {
        event.preventDefault();
        // alert(`my name is ${this.state.name}`)
        const isValid = this.validate();
        if (isValid) {
        console.log(this.state);
        // clear form
        // this.setState(initialState);
        // alert(JSON.stringify(this.state))
        this.setState(initialState);
        }
        
    }

    validate = () => {

        let login_error = ""
    

        if (!this.state.password || !this.state.email) {
            login_error = "Email or Password Can't blank";
          }

        let user_id = "rrgupta1012@gmail.com"
        let password_id = "12345"
        
        if (this.state.password && this.state.email){
            if ((this.state.password == password_id) && (this.state.email == user_id)){
                console.log('login successfully')
                return true
            }
            else{
                login_error = "Incorrect Email or Password";
            }
        }
        if (login_error) {
          this.setState({ login_error });
          return false;
        }
    
        return true;
      };


    render(){
        return(
           <div className="signin_wrapper">
                <div className="container-fluid">
                    <div className="text-center">
                        <h2>Login</h2>
                    </div>
                    <div className="row">
                        <div  className="col-6 offset-3">
                            <form name="signin_form" id="signin" onSubmit = {this.hanlesubmit}>
                                 <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div><span>Email</span></div>
                                            <input type="email" placeholder="Email" className="form-control" name="email" id="email" value={this.state.email}  onChange={this.handleChangeAll} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.emailError}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div><span>Password</span></div>
                                            <input type="password" placeholder="Password" className="form-control" name="password" id="password" value={this.state.password}  onChange={this.handleChangeAll} />
                                        </div>
                                        <div className="col-12 text-center">
                                            <div className="text-left" style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.login_error}
                                            </div>
                                            <button className="btn capsule-btn signin_submit mt-3" type="submit" id="signin_submit">Login</button>
                                        </div>
                                    </div>
                                 </div>
                            </form>
                            <div className="container">
                                    <div>
                                    <p><b className="cursor-pointer" style={{color:"orange"}}>Forgot Password?</b> <span className="cursor-pointer" style={{color:"green"}}>Register Now!!</span></p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );

    }
}
export default Signin;