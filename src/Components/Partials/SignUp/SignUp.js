import React, { Component } from 'react'

import 'react-web-tabs/dist/react-web-tabs.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import Img1 from '../../../Images/facebook.png'
import Img3 from '../../../Images/google.png'
import Img4 from '../../../Images/circle1.png'
import Img5 from '../../../Images/circle2.png'


export class SignUp extends Component {
state = {
email : "",
password: "",
}

handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })
}
handleLogin = (e) => {
    e.preventDefault();
    alert(`user: ${this.state.email} \n pass: ${this.state.password}`)
}
    render() {
        return (
            <div>
                <div className="form-box">
                    <Tabs
                        defaultTab="one"
                        onChange={(tabId) => { console.log(tabId) }}
                    >
                        <TabList className="mb-5 mt-n1">
                            <Tab tabFor="one" className="tab1">Sign In</Tab>
                            <Tab tabFor="two" className="tab2">Sign Up</Tab>
                        </TabList>
                        <TabPanel tabId="one">
                            <form className="sign-in">
                                <div className="position-relative">
                                    <input type="text" placeholder="Login with Facebook" className="form-control" />
                                    <img src={Img1} className="background position-absolute" alt="deco-background" />
                                </div>

                                <div className="position-relative">
                                    <input type="text" placeholder="Login with Google" className="form-control mt-2" />
                                    <img src={Img3} className="background position-absolute" alt="deco-background" />
                                </div>
                            </form>
                            <h6 className="division">or</h6>
                            <form >
                                <input onChange={this.handleChange.bind(this) } name="email" type="text" placeholder="Enter Card No. or Email" className="form-control" />
                                <input onChange={this.handleChange.bind(this) } name="password" type="password" placeholder="Enter Password" className="form-control mt-2" />
                                <button className="next-btn" onClick={this.handleLogin.bind(this)}>
                                    Sign In
                                </button>
                            </form>

                        </TabPanel>
                        <TabPanel tabId="two">
                            <form className="sign-up">
                                <div className="radio-inputs">
                                    <input type="radio" checked="checked" id="male" name="gender" className="form mr-2" value="male" />
                                    <label>Register as Hospital, Clinic</label><br />
                                    <img src={Img4} className="background2 position-absolute" alt="deco-background" />
                                </div>
                                <p>Patients Click Here</p>
                                <div className="radio-inputs mt-3">
                                    <input type="radio" id="female" name="gender" className="form mr-2" value="female" />
                                    <label>Register as a Patient</label><br />
                                    <img src={Img5} className="background2 position-absolute" alt="deco-background" />
                                </div>
                                <p>Patients Click Here</p>
                                <button
                                    className="next-btn"
                                    onClick={this.props.nextStep}
                                >
                                    Next
                                </button>
                            </form>
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        )
    }
}

export default SignUp
