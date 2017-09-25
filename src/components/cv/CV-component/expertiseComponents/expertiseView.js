import React from 'react';
import './expertiseStyling.css'
import {Component} from 'react';
import fetch from 'node-fetch'
import {connect} from 'react-redux'
import * as consultantActions from '../actions/addProjectActions'
import * as fetchActions from '../actions/fetchActions';
import {bindActionCreators} from 'redux'
import FormExpertise from './expertiseComponent'
import ExpertiseTable from "./expertiseFormComponent";
import {InsertModalFooter, InsertButton} from "react-bootstrap-table";

const cellEditProp = {
    mode: 'dbclick',
    blurToSave: true
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};

//Hjelpemetode for å midlertidig lagre en rad fra modalen
function helpAddRow(row) {
    helpRow = row
    return helpRow
}

let helpRow = {}

class Expertise extends Component {
    constructor(props){
        super(props)
        this.state={
            menuKey:1,
            consultant: props.consultant,
            usersData: props.data,
            tempLevel: '',
            consultants: [
                {navn: 'Andreas', alder: 28},
                {navn: 'Danish', alder: 21}
            ],
            tempUsers: []
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.consultant.email !== nextProps.consultant.email) {
            this.setState({consultant: Object.assign({}, nextProps.consultant)})
        }
    }

    handleModalClose(closeModal) {
        closeModal();
    }

    onAddRow(row) {
        //  helpRow = row
        //console.log(helpRow)
        console.log("ONADDROW")
    }

    handleSave(save) {
        console.log("HANDLE SAVE")
        console.log()
        //this.props.userActions.addUser(helpRow)
        save();
    }


    //handleTableComplete() {
      //  console.log("HANDLE TABLE COMPLETE")
    //}

    //handleInsertedRow(row) {
      //  console.log('----------')
    //}

    onClickTest(event) {
        console.log(this.props.data)
    }

    createCustomModalFooter = (closeModal, save) => {
        return (
            <InsertModalFooter
                className='my-custom-class'
                saveBtnText='Custom save button'
                closeBtnText='CustomCloseText'
                closeBtnContextual='btn-warning'
                saveBtnContextual='btn-success'
                closeBtnClass='my-close-btn-class'
                saveBtnClass='my-save-btn-class'
                onModalClose={() => this.handleModalClose(closeModal)}
                onSave={() => this.handleSave(save)}
            />
        );
    }

    render(){
        const options = {
            insertModalFooter: this.createCustomModalFooter,
            onAddRow: this.onAddRow
        };

        return(
            <div>
                <br/><br/>
                <ExpertiseTable
                    knowledges={this.props.data}
                    options={options}
                    remote={this.remote}
                />
                <br/><br/>
                <button onClick={this.onClickTest.bind(this)}>Vis data lagret i STORE</button>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        consultant: state.consultant,
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(consultantActions, dispatch),
        userActions: bindActionCreators(fetchActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expertise)
