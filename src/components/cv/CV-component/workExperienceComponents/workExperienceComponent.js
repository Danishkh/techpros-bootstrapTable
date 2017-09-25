import React from 'react'
import PropTypes from 'prop-types'
import {FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap'
import { DateField } from 'react-date-picker'
import './workExperienceStyling.css'


const FormWorkExperience = ({ onChange, onClick, addLearned}) => {
    return (
        <div className="container">
            <FormGroup controlId="formBasicText">
                <ControlLabel>Arbeidserfaring</ControlLabel>
                <FormControl
                    name="description"
                    type="Sted"
                    placeholder="Beskrivelse av arbeid"
                    onChange={onChange}
                />

                <ControlLabel>Periode</ControlLabel>

                    <FormControl
                        name="title"
                        type="Tittel"
                        placeholder="Arbeidstittel"
                        onChange={onChange}
                    />
                    <FormControl
                        name="company"
                        type="Erfaringer"
                        placeholder="Selskap"
                        onChange={onChange}
                    />
                    <FormControl
                        name="whatHaveILearned"
                        type="Kunnskap"
                        placeholder="Hva lærte du?"
                        onChange={onChange}
                    />
                    <Button  bsStyle="success" onClick={addLearned}>Legg til kunnskap</Button>


                    <Button  bsStyle="success" onClick={onClick} componentClass="">Update</Button>

            </FormGroup>
        </div>



    );
}

FormWorkExperience.propTypes = {
    consultant: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    addLearned: PropTypes.func.isRequired
};

export default FormWorkExperience
