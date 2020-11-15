import React, { Component, Fragment } from 'react'
import { Avatar, Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changePassword } from '../../store/actions/users.actions.js'

import './style.css'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password1: "",
            password2: "",
            passwordsIdentical: true,
            passwordChanged: false,
        }
    }

    changePassword1 = (e) => {
        let val = e.target.value;
        this.setState({password1: val});
    }

    changePassword2 = (e) => {
        let val = e.target.value;
        this.setState({password2: val});
    }

    sendOnKeyboard = (e) => {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 13) {
            e.preventDefault();
            this.changePassword();
        }
    }

    changePassword = () => {
        let { myId, users } = this.props
        let { password1, password2 } = this.state;

        this.setState({ passwordChanged: false });

        let me = users.find(item => myId == item.id);

        if (password1 != '' && password1 === password2) {
            this.setState({ passwordsIdentical: true });
            this.setState({ passwordChanged: true })
        } else {
            this.setState({ passwordsIdentical: false });
        }

        this.props.changePassword(`/api/changePassword/${ myId }`, password1)

        this.setState({ password1: "", password2: "" });
    }

    render() {
        let { myId, users } = this.props;
        let { passwordsIdentical, passwordChanged } = this.state;

        let me = users.find(item => myId == item.id);

        return(
            <Fragment>
                <div className="profile">
                    <Link alt = "Home" to = "/">
                        <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowBackIosIcon />} />
                    </Link>
                    <div className="profile-header justify-content-center">
                        <Avatar alt="me" src={ me.avatar } />
                        <h2>{ me.name }</h2>
                        <p>{ me.email }</p>
                    </div>
                    <div className="change-password-form">
                        <h3>Password change</h3>
                        <form id="password-form" action="">
                            { passwordsIdentical ? null : <h3 className="error-message">Passwords must be equal!</h3> }
                            { passwordChanged ? <h3 className="ok-message">Password changed successfully</h3> : null }
                            <input type="password" id="input-password-1" placeholder="Enter new password" onChange = { this.changePassword1 } onKeyPress = { this.sendOnKeyboard }></input>
                            <input type="password" id="input-password-2" placeholder="Enter new password again" onChange = { this.changePassword2 } onKeyPress = { this.sendOnKeyboard }></input>
                            <input type="button" id="profile-submit" value="Change" onClick={ this.changePassword } onKeyPress = { this.sendOnKeyboard }></input>
                        </form>
                    </div>
                    <div className="logout-button">
                        <Link alt = "Logout" to = "/" onClick = { this.props.logOut } >
                            <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ExitToAppIcon />}
                            >Logout</Button>
                        </Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ usersReducer }) => ({
    users: usersReducer.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ changePassword }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);    