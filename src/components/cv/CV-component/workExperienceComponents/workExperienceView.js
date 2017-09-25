import React from 'react';
import './workExperienceStyling.css'
import {Component} from 'react';
import fetch from 'node-fetch'
import FormWorkExperience from './workExperienceComponent'
import {connect} from 'react-redux'
import * as consultantActions from '../actions/addProjectActions'
import {bindActionCreators} from 'redux'

class Work extends Component {
    constructor(props){
        super(props)
        this.state = {
            consultant: props.consultant,
            tempWhatHaveILearned: []
        }
        this.onClickSave = this.onClickSave.bind(this)
        this.updateConsultantState = this.updateConsultantState.bind(this)
        this.addLearned = this.addLearned.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.consultant.email !== nextProps.consultant.email) {
            this.setState({consultant: Object.assign({}, nextProps.consultant)})
        }
    }
    onClickSave(event) {
        const constLearned = {
            description: this.state.consultant.workExperiences.description,
            title: this.state.consultant.workExperiences.title,
            whatHaveILearned: this.state.tempWhatHaveILearned,
            company: this.state.consultant.workExperiences.company
        }

        let consultant = Object.assign({}, this.state.consultant)
        let workExperiences = consultant.workExperiences != null ? consultant.workExperiences : []
        workExperiences.push(constLearned)
        consultant.workExperiences = workExperiences
        this.setState(consultant)
        console.log(consultant.workExperiences)

        fetch('https://techpros-cv-srv-dev.herokuapp.com/consultants/consultant', {
            redirect: 'manual',
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(consultant)
        })
    }

    addLearned(event) {
        let learned = this.state.consultant.workExperiences.whatHaveILearned
        this.setState({tempWhatHaveILearned: this.state.tempWhatHaveILearned.concat(learned)})
    }

    updateConsultantState(event) {
        const field = event.target.name
        let consultant = Object.assign({}, this.state.consultant)
        consultant.workExperiences[field] = event.target.value
        return this.setState({consultant: consultant})
    }

    render(){
        return(
            <div className="container">
              <FormWorkExperience
                  consultant={this.state.consultant}
                  onChange={this.updateConsultantState}
                  onClick={this.onClickSave}
                  addLearned={this.addLearned}
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

export default connect(mapStateToProps, mapDispatchToProps)(Work)
