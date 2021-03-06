import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import Backbone from 'backbone';
//  redirectUri: 'https://techpros-act-portal.herokuapp.com/home',
/*
,
            clientId: '0oabzuwlbbOsw0N4S0h7',
            redirectUri: 'https://techpros-act-portal.herokuapp.com/login',
            authParams: {
                responseType: 'id_token'
            }
 */
export default class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = { user: null };
        this.widget = new OktaSignIn({
            baseUrl: 'https://dev-425023.oktapreview.com',
            clientId: '0oabzuwlbbOsw0N4S0h7',
            redirectUri: 'https://techpros-act-portal.herokuapp.com/login',
            authParams: {
                responseType: 'id_token'
            }

        });

        this.showLogin = this.showLogin.bind(this);
        this.logout = this.logout.bind(this);
    }



    componentDidMount(){
        console.log('componentDidMount...');
        this.widget.session.get((response) => {
            if(response.status !== 'INACTIVE'){
                this.setState({user:response.login});
            }else{
                this.showLogin();
            }
        });
    }

    showLogin(){
        console.log('showLogin...')
        Backbone.history.stop();
        this.widget.renderEl({el:this.loginContainer},
            (response) => {
                console.log('OK renderEl...');
                console.log(response.status );

                this.setState({user: response.claims.email});
                this.widget.remove();
            },
            (err) => {
                console.log('Feiler renderEl...');
                console.log(err);
            }
        );
    }

    logout(){
        console.log('logout...');
        this.widget.signOut(() => {
            this.setState({user: null});
            this.showLogin();
        });
    }

    render(){
        console.log('rendering...');
        return(
            <div>
                {this.state.user ? (
                    <div className="container">
                        <div>Welcome, {this.state.user}!</div>
                        <button onClick={this.logout}>Logout</button>
                    </div>
                ) : null}
                {this.state.user ? null : (
                    <div ref={(div) => {this.loginContainer = div; }} />
                )}
            </div>
        );
    }
}