import React from 'react';
import './educationStyling.css'
import {Component} from 'react';
import 'react-date-picker/index.css'
import fetch from 'node-fetch'
import FormEducation from './educationFormComponent'
import EduTable from './educationTableComponent'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import * as consultantActions from '../actions/addProjectActions'
import {bindActionCreators} from 'redux'
import FormProjects from "../projectsComponents/projectFormComponent";

class Education extends Component {
    constructor(props){
        super(props)
        this.state = {
            consultant: props.consultant,
            products:[{
                name:"Andreas",
                age:"old",
                phone:"438t9348"
                     }]
        }
        this.updateConsultantState = this.updateConsultantState.bind(this)
        this.onClickSave = this.onClickSave.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.consultant.email !== nextProps.consultant.email) {
            this.setState({consultant: Object.assign({}, nextProps.consultant)})
        }
    }

    onClickSave(event) {
        //Mangler 'Period' field
        let constEducation = {
            name: this.state.consultant.educations.name,
            degreeDetails: this.state.consultant.educations.degreeDetails,
            degree: this.state.consultant.educations.degree,
            educationType: 'COURSE' //Må endres - Må hente value fra en dropdown/radiobuttons
        }

        let consultant = Object.assign({}, this.state.consultant)
        let educations = consultant.educations != null ? consultant.educations : []
        educations.push(constEducation)
        consultant.educations = educations
        this.setState(consultant)

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

    updateConsultantState(event) {
        const field = event.target.name
        let consultant = Object.assign({}, this.state.consultant)
        consultant.educations[field] = event.target.value
        return this.setState({consultant: consultant})
    }

    handleDelete(e){
        let consultant = Object.assign({}, this.state.consultant)
        let index = e.target.id
        let educations = consultant.educations != null ? consultant.educations : []
        if (index < educations.length) {
            educations.splice(index, 1)
        }
        consultant.educations = educations
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
    render(){
        let i = 0;
        return(
            <div className="container">
                <h1>Utdannelsesinformasjon</h1>
                <FormEducation
                    consultant={this.props.consultant.educations}
                    addEducation={this.onClickSave}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        consultant: state.consultant
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(consultantActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Education)
