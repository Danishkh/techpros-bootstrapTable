import React from 'react'
import PropTypes from 'prop-types'
import {FormControl,FormGroup,ControlLabel,Button, SplitButton,MenuItem} from 'react-bootstrap'
import { DateField } from 'react-date-picker'
import './expertiseStyling.css'


const FormExpertise = ({onChange, onClick, showSkillLevel, handleChange}) => {
    return (
        <div className="container">
            <FormGroup controlId="formBasicText">

                    <h3 className="showSkill">{showSkillLevel}</h3>

                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Kunnskaper</ControlLabel>
                        <FormControl
                            name="name"
                            type="name"
                            placeholder="Kunnskap"
                            onChange={onChange}
                        />

                        <SplitButton bsStyle="primary" title="Nivå" pullRight id="split-button-pull-right" >
                            <MenuItem eventKey="1" name="first" onClick={handleChange}>G</MenuItem>
                            <MenuItem eventKey="2" name="second" onClick={handleChange}>M</MenuItem>
                            <MenuItem eventKey="3" name="third" onClick={handleChange}>E</MenuItem>
                        </SplitButton>

                        <FormControl
                            type="Erfaringer"
                            placeholder="Måneder erfaring"
                            onChange={onChange}
                        />
                        <FormControl
                            type="Kunnskap"
                            placeholder=" Års erfaring"
                            onChange={onChange}
                        />
                    </FormGroup>
                    <Button bsStyle="success" onClick={onClick}>Oppdater</Button>


            </FormGroup>
        </div>
    );
}

FormExpertise.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default FormExpertise