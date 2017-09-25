import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../common/Navigation'
//component and css Import
import './CVNavigationStyling.css'
//External import
import Profile from './CV-component/profileComponents/profileView'
import Expertise from './CV-component/expertiseComponents/expertiseView'
import Education from './CV-component/educationComponents/educationView'
import Work from './CV-component/workExperienceComponents/workExperienceView'
import Project from './CV-component/projectsComponents/projectsView'
//import Mobilemeny from './CV-component/mobile/hamburger'
import {Nav,NavItem} from 'react-bootstrap'

class CVNavigationHandler extends Component {
  constructor(props) {
      super(props)
      this.state = {currentKey: "1", width: window.innerWidth}
      this.navBarHandler = this.navBarHandler.bind(this)
      this.render_form = this.render_form.bind(this)
  }
    navBarHandler(eventKey) {
        this.setState({currentKey: eventKey})
    }
    componentWillMount(){
      window.addEventListener('resize', this.handleWindowChange)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleWindowChange)
    }
    handleWindowChange = () =>{
        this.setState({width: window.innerWidth})
    }
    render_form() {
            switch (this.state.currentKey) {
                case "1":
                    return (<Profile />)
                case "2":
                    return (<Education />)
                case "3":
                    return (<Project />)
                case "4":
                    return (<Work />)
                case "5":
                    return (<Expertise />)
                default:
                    console.log("error")
            }
        }
render(){
        /*const{ width } = this.state
        const isMobile = width < 1200

        if(isMobile){
            return(
                <div>
                    <Mobilemeny/>
                </div>
            )
        }*/
    return(
        <div className="container">
          <Nav bsStyle="tabs" activeKey={this.state.currentKey}>
          <NavItem eventKey="1" title="konsulentprofil" onClick={() => this.navBarHandler("1")}><p className="konsLine">Konsulentprofil</p></NavItem>
          <NavItem eventKey="2" title="utdannelse" onClick={() => this.navBarHandler("2")}><p className="utLine">Utdannelse</p></NavItem>
          <NavItem eventKey="3" title="prosjekter" onClick={() => this.navBarHandler("3")}><p className="prosLine"> Prosjekter</p> </NavItem>
          <NavItem eventKey="4" title="Item" onClick={() => this.navBarHandler("4")}><p className="arbeLine">Arbeidserfaring </p></NavItem>
          <NavItem eventKey="5" title="ekspertise" onClick={() => this.navBarHandler("5")}><p className="kunnsLine">Kunnskap</p> </NavItem>

              <div className={"bar"}>
          {this.render_form()}
            </div>

          </Nav>
        </div>


      )
    }

}
function mapStateToProps(state,ownProps){
    return {cv: state.cv};
}

function mapDispatchToProps(state,ownProps){

}

export default connect(mapStateToProps,mapDispatchToProps)(CVNavigationHandler)
