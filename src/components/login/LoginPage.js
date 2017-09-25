import React from 'react';
import {LoginButton,LogoutButton,Greeting} from './Greetings';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/loginActions'

class LoginPage extends React.Component {
        constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
     }
    handleLoginClick() {
        console.log("handleLoginClick");
        this.props.actions.loginAction();
    }

    handleLogoutClick() {
        console.log("handleLogoutClick");
        this.props.actions.logoutAction();
    }

    render() {
        let button = null;

        if (this.props.isLoggedIn) {
            console.log("Login");
           button = <LogoutButton className="btn btn-primary btn-lg" onClick={this.handleLogoutClick} />;
        } else {
            console.log("logout handling");
           button = <LoginButton className="btn btn-primary btn-lg" onClick={this.handleLoginClick} />;
        }

        return (
            <div className="container">
                <h1>Login</h1>
                <div className="well">
                <Greeting isLoggedIn={this.props.isLoggedIn} />
                </div>
                {button}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
                loginReduser : state.loginReduser

    };
}

/**
 * http://redux.js.org/docs/basics/Actions.html
 * @param dispatch
 * @returns {{actions: (ActionCreator<any> | ActionCreatorsMapObject)}}
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
        
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
