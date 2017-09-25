import React from 'react';
import PropTypes from 'prop-types'
import './projectStyling.css'
import {FormGroup} from 'react-bootstrap'

 const ResponsibilityForm = () => {
     return(
            <FormGroup controlId="formBasicText">
                <input
                    type="prosjektAnsvar"
                    placeholder="Ansvar"
                />
            </FormGroup>
        )
    }
ResponsibilityForm.propTypes = {
    controlId: PropTypes.number.isRequired
};
    export default ResponsibilityForm
