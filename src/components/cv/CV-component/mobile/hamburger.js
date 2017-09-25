import {slide as Menu } from 'react-burger-menu'
import './hamburgerStyle.css'
import Profile from '../profileComponents/consultantProfileComponent'
import Expertise from '../expertiseComponents/expertiseView'
import Education from '../educationComponents/educationView'
import Work from '../workExperienceComponents/workExperienceView'
import Project from '../projectsComponents/projectsView'
import React from 'react'
import {NavItem} from 'react-bootstrap'

export default class Mobilemeny extends React.Component {

  constructor(props){
    super(props)
    this.state = { storedData: [],
                currentKey: "1"}

      this.navBarHandlerMobile = this.navBarHandlerMobile.bind(this)
      this.render_formMobile = this.render_formMobile.bind(this)
  }

    navBarHandlerMobile(eventKey) {
        this.setState({currentKey: eventKey})
        console.log(eventKey)
    }


    render_formMobile() {
            switch (this.state.currentKey) {
                case "1":
                    return (<Profile/>)
                case "2":
                    return (<Education/>)
                case "3":
                    return (<Project/>)
                case "4":
                    return (<Work/>)
                case "5":
                    return (<Expertise/>)
                default:
                    console.log("error")
            }
        }

  showSettings (event) {
    event.preventDefault();

  }
  isMenuOpen(state){
    return state.isOpen
  }

  render () {
    return (
      <div>
          <div className="miniHeader"> <h2 className="techName">Tech<b>Pros</b></h2></div>

          <Menu isOpen={false} activeKey={this.state.currentKey}>
      <NavItem className="konsult" eventKey="1" title="konsulentprofil" onClick={() => this.navBarHandlerMobile("1")}><p className="konsMLine">Konsulentprofil</p></NavItem>
      <NavItem className="konsult" eventKey="2" title="utdannelse" onClick={() => this.navBarHandlerMobile("2")}><p className="utMLine">Utdannelse</p></NavItem>
      <NavItem className="konsult" eventKey="3" title="prosjekter" onClick={() => this.navBarHandlerMobile("3")}> <p className="prosMLine">Prosjekter </p></NavItem>
      <NavItem className="konsult" eventKey="4" title="Item" onClick={() => this.navBarHandlerMobile("4")}><p className="arbeMLine">Arbeidserfaring </p></NavItem>
      <NavItem className="konsult" eventKey="5" title="ekspertise" onClick={() => this.navBarHandlerMobile("5")}><p className="kunnsMLine">Kunnskap</p> </NavItem>
          </Menu>
          <div>
              {this.render_formMobile()}
          </div>
        </div>
    );
  }
}
