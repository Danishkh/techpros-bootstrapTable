import React from 'react'
import PropTypes from 'prop-types'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import EduTable from './educationTableComponent'
import './educationStyling.css'

const FormEducation = ({consultant}) => {
    const cellEditProp = {
        mode: 'click',
        blurToSave: true
    };
    return (
        <div className='modal-header'>
                <BootstrapTable data={consultant} cellEdit={cellEditProp} insertRow={ true }>
                <TableHeaderColumn dataField='name' isKey={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='educationsType'>Utdannelsestype</TableHeaderColumn>
                <TableHeaderColumn dataField='degree'>Grad</TableHeaderColumn>
                <TableHeaderColumn dataField='degreeDetails' editable={{type: 'textarea'}}> Ekstra Detaljer</TableHeaderColumn>
            </BootstrapTable>
        </div>
);
}
FormEducation.propTypes = {
    consultant: PropTypes.object.isRequired,
};

export default FormEducation
