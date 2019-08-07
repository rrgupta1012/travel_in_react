import React ,{Component} from 'react';
// import {link} from 'react-router-dom';
import './signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const initialState =  {
    name: "",
    email:"",
    contact:"",
    password:"",
    confirm_password:"",
    nameError: "",
    emailError: "",
    passwordError: "",
    contactError: "",
    confirmpassworderror: ""
}

class Signup extends Component {

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
        alert(JSON.stringify(this.state))
        this.setState(initialState);
        }
        
    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";
        let confirmpassworderror = "";
        let contactError = "";
    
        if (!this.state.name) {
          nameError = "name cannot be blank";
        }

        if (!this.state.password) {
            passwordError = "password cannot be blank";
          }
        if (!this.state.contact) {
            contactError = "contact cannot be blank";
        }
        if (this.state.contact) {
            const contact_len = this.state.contact
            if(contact_len.length != 10){
            contactError = "contact should be of 10 digit";
            }
        }
        if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }
        if (!this.state.confirm_password) {
            confirmpassworderror = "confirm password should be same as password"
          }

        if(this.state.password && this.state.confirm_password){
            if(this.state.password != this.state.confirm_password){
                confirmpassworderror = "confirm password should be same as password" 
            }
        }
    
        if (emailError || nameError || passwordError || confirmpassworderror || contactError) {
          this.setState({ emailError, nameError, passwordError, confirmpassworderror,contactError });
          return false;
        }
    
        return true;
      };


    render(){
        return(
           <div className="signup_wrapper">
                <div className="container-fluid">
                    <div className="text-center">
                        <h2>Signup</h2>
                    </div>
                    <div className="row">
                        <div  className="col-6 offset-3">
                            <form name="signup_form" id="signup" onSubmit = {this.hanlesubmit}>
                                 <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div><span>Name</span></div>
                                            <input type="text" placeholder="Name" className="form-control" name="name" id="name" value={this.state.name} onChange={this.handleChangeAll} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                    {this.state.nameError}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div><span>Email</span></div>
                                            <input type="email" placeholder="Email" className="form-control" name="email" id="email" value={this.state.email}  onChange={this.handleChangeAll} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.emailError}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div><span>Contact</span></div>
                                            <input type="number" placeholder="Contact" className="form-control" name="contact" id="contact" value={this.state.contact}   onChange={this.handleChangeAll} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.contactError}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div><span>Password</span></div>
                                            <input type="password" placeholder="Password" className="form-control" name="password" id="password" value={this.state.password}  onChange={this.handleChangeAll} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.passwordError}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div><span>Confirm Password</span></div>
                                            <input type="password" placeholder="Confirm Password" className="form-control" name="confirm_password" id="confirm_password" value={this.state.confirm_password} onChange={this.handleChangeAll} />
                                            <div style={{ fontSize: 12, color: "red" }}>
                                                {this.state.confirmpassworderror}
                                            </div>
                                        </div>
                                        <div className="col-12 text-center mt-3">
                                            <button className="btn capsule-btn signup_submit" type="submit" id="signup_submit">Sign Up</button>
                                        </div>
                                    </div>
                                 </div>
                            </form>
                            <div className="container" style={{"margin-top":"-14px"}}>
                                    <div>
                                        <p><b><span className="cursor-pointer" style={{color:"green"}}></span> </b></p>
                                        <p><b style={{color:"orange"}}>Already Registered</b> <span className="cursor-pointer" style={{color:"green"}}>Login Now !!</span></p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );

    }
}
export default Signup;