import React from 'react'
import Layout from './common/Layout';
import {Route,Switch} from 'react-router-dom'
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import LoginPage from './auth/LoginPage';
import CVPage from './cv/CVPage';
import ForesporselModul from './mottak/ForesporselModul';
import CVNavigationHandler from "./cv/CVNavigationHandler";

export default class App extends React.Component {
    render(){
        return (
            <div>
              <Layout/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route exact path='/home' component={HomePage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/cv' component={CVNavigationHandler}/>
                    <Route exact path='/design' component={CVPage}/>
                    <Route exact path='/foresporsler' component={ForesporselModul}/>
                </Switch>
            </div>
        );
    }
}



/*
  <Route path="/" component={Navigation}>
 <Route path="/" component={Layout}>
    </Route>
*/

/*
const App = () => (
    <div>
        <Header />
        <Main />
    </div>
)

App.propTypes = {
    children: PropTypes.object.isRequired,
};
 */
