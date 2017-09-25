import React from 'react';
import './projectStyling.css'
import {Component} from 'react';
import fetch from 'node-fetch'
import {connect} from 'react-redux'
import * as consultantActions from '../actions/addProjectActions'
import {bindActionCreators} from 'redux'

//Component imports
import ProjectTable from './projectTableComponent'
import FormProjects from "./projectFormComponent";

class Project extends Component {
    constructor(props){
        super(props)
        this.state = {
            consultant: props.consultant,
            tempResponsibilities: [],
            tempDescriptions: []
        }

        this.updateConsultantState = this.updateConsultantState.bind(this)
        this.handleClick = this.handleClick.bind(this)
        //this.addResponsibility = this.addResponsibility.bind(this)
        //this.addDescription = this.addDescription.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.onClickSave = this.onClickSave.bind(this)

    }
    componentWillReceiveProps(nextProps) {
        if(this.props.consultant.email !== nextProps.consultant.email) {
            this.setState({consultant: Object.assign({}, nextProps.consultant)})
        }
    }

    /*addResponsibility(event) {
        let responsibility = this.state.consultant.projects.responsibilities
        this.setState({tempResponsibilities: this.state.tempResponsibilities.push(responsibility)})
        console.log(this.state.tempResponsibilities)

    }*/
   /* addDescription(event) {

    }*/
    handleClick(event) {
        console.log(this.state.consultant.projects)
    }
    updateConsultantState(event) {
        const field = event.target.name
        let consultant = Object.assign({}, this.state.consultant)
        consultant.projects[field] = event.target.value
        return this.setState({consultant: consultant})
    }
    handleDelete(e){
        let consultant = Object.assign({}, this.state.consultant)
        let index = e.target.id
        let projects = consultant.projects != null ? consultant.projects : []
        if (index < projects.length) {
            projects.splice(index, 1)
        }
        consultant.projects = projects
        this.setState({consultant})

        fetch('https://techpros-cv-srv-dev.herokuapp.com/consultants/consultant', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.consultant)
        })
    }
    onClickSave(event) {
        const constProject = {
            name: this.state.consultant.projects.name,
            descriptions: this.state.consultant.projects.descriptions,
            descriptionsDetails: this.state.tempDescriptions,
            responsibilities: this.state.tempResponsibilities,
            role: this.state.consultant.projects.role
        }
        console.log(constProject)
        let description = this.state.consultant.projects.descriptionsDetails
        this.setState({tempDescriptions: this.state.tempDescriptions.concat(description)})
        let responsibilities = this.state.consultant.projects.responsibilities
        this.setState({tempResponsibilities: this.state.tempResponsibilities.concat(responsibilities)})

        let consultant = Object.assign({}, this.state.consultant)
        let projects = consultant.projects != null ? consultant.projects : []
        projects.push(constProject)
        consultant.projects = projects
        this.setState(consultant)
        //console.log(projects)

        fetch('https://techpros-cv-srv-dev.herokuapp.com/consultants/consultant', {
            redirect: 'manual',
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consultant)
        })

        console.log("Success")
    }
    render(){
        let i = 0
        return(
            <div>
                <FormProjects
                    consultant={this.state.consultant}
                    onChange={this.updateConsultantState}
                    onClick={this.onClickSave}
                />
                <br/><br/>
                <ProjectTable
                    consultant={this.state.consultant}
                    handleDelete={this.handleDelete}
                    index={i}
                />
            </div>
        )
    }
}
function mapStateToProps(state, ownProps){
    return {
        consultant: state.consultant,
        buttonString: state.buttonString
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(consultantActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
