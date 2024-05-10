import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userSevice'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isshowpassword: false,
            errMessege: "",
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })

    }

    handleLogin = async () => {
        this.setState({
            errMessege: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessege: data.messege
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('login success')
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessege: e.response.data.messege
                    })
                }
            }

        }
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleShowHidePassword = () => {
        this.setState({
            isshowpassword: !this.state.isshowpassword
        })
    }


    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>UserName:</label>
                            <input type='text' className='form-control' placeholder='Enter your Username'
                                value={this.state.username}
                                onChange={(event) => this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>PassWord:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isshowpassword ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your Password'
                                    onChange={(event) => this.handleOnChangePassword(event)}
                                />
                                <span
                                    onClick={(event) => { this.handleShowHidePassword(event) }}
                                >
                                    <i className={this.state.isshowpassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>

                                </span>
                            </div>
                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessege}
                        </div>
                        <div className='col-12'>
                            <button
                                className='btn-login'
                                onClick={(event) => this.handleLogin(event)}
                            >Login</button>

                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or login with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
