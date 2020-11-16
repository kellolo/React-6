import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './style.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'egor@me.com',
            password: 'password',
            correctLogin: true,
            correctPassword: true,
        }
    }

    loginUser = () => {
        let { users } = this.props;
        let { login, password } = this.state;
        let userToLogIn;
        userToLogIn = users.find(item => item.email == login);
        if (login != '' && typeof userToLogIn != 'undefined') {
            this.setState({ correctLogin: true });
            if (password == userToLogIn.password) {
                this.setMe(userToLogIn.id);
            } else {
                this.setState({ correctPassword: false });
            }
        } else {
            this.setState({ correctLogin: false });
        }

        
    }

    sendOnKeyboard = (e) => {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 13) {
            e.preventDefault()
            this.loginUser()
        }
    }

    setMe = (me) => {
        this.props.setMe(me)
    }

    changeLogin = (e) => {
        let val = e.target.value;
        this.setState({login: val});
    }

    changePassword = (e) => {
        let val = e.target.value;
        this.setState({password: val});
    }

    render() {
        let { myId, users } = this.props;
        let { login, password, correctLogin, correctPassword } = this.state;

        let me = users.find(item => myId == item.id);

        return(
            <Fragment>
                <div className="login">
                    <div className="login-header justify-content-center">
                        <h2>Enter email and password</h2>
                        { correctLogin ? null : <h3 className="error-message">User not found!</h3> }
                        { correctPassword ? null : <h3 className="error-message">Wrong password!</h3> }
                    </div>
                    <form id="login-form" action="">
                        <input type="email" id="input-login" placeholder="email" value = { login } onChange = { this.changeLogin } onKeyPress = { this.sendOnKeyboard }></input>
                        <input type="password" id="input-password" placeholder="password" value = { password } onChange = { this.changePassword } onKeyPress = { this.sendOnKeyboard }></input>
                        <input type="button" id="submit" value="Log in" onClick={ this.loginUser } onKeyPress = { this.sendOnKeyboard }></input>
                    </form>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ usersReducer }) => ({
    users: usersReducer.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);    