import React from 'react';
import './profileStyling.css'
import {Component} from 'react';
import {connect} from 'react-redux'
import * as consultantActions from '../actions/addProjectActions'
import {bindActionCreators} from 'redux'
import FormProfile from './consultantProfileComponent'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            consultant: props.consultant
        }
        this.updateConsultantState = this.updateConsultantState.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.consultant.email !== nextProps.consultant.email) {
            this.setState({consultant: Object.assign({}, nextProps.consultant)})
        }
    }
    updateConsultantState(event) {
        const field = event.target.name
        let consultant = Object.assign({}, this.state.consultant)
        consultant[field] = event.target.value
        console.log(consultant)
        return this.setState({consultant: consultant})
    }
    handleUpdate(event) {
        fetch('https://techpros-cv-srv-dev.herokuapp.com/consultants/consultant', {
            redirect: 'manual',
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.consultant)
        })
    }
    render(){
        let date = '2017-04-24'
        return(
            <div className="container">
                <FormProfile
                    consultant={this.state.consultant}
                    onChange={this.updateConsultantState}
                    onClickUpdate={this.handleUpdate}
                    date={date}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        allConsultants: state.allConsultants,
        consultant: state.consultant
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(consultantActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
