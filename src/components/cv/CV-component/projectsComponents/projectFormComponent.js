import React from 'react'
import PropTypes from 'prop-types'
import {FormControl,FormGroup,ControlLabel, Button} from 'react-bootstrap'
import './projectStyling.css'
import {addResponsibilityForm} from "../actions/addProjectActions";


const FormProjects = ({ onChange, onClick,addRoleButton, addResponsibility}) => {
    return (
        <div>
            <div className="container">
                <FormGroup controlId="formBasicText">
                    <ControlLabel>Prosjekter</ControlLabel>
                    <FormControl
                        name="name"
                        type="prosjektNavn"
                        placeholder="Prosjektnavn"
                        onChange={onChange}
                    />
                    <FormControl
                        name="responsibilities"
                        type="ProsjektAnsvar"
                        placeholder="ProsjektAnsvar"
                        onChange={onChange}
                    />
                    <Button bsStyle="success" onClick={addResponsibility}>Legg til Ansvar</Button>
                    <FormControl
                        name="descriptionsDetails"
                        type=""
                        placeholder="Prosjektbeskrivelse"
                        onChange={onChange}
                    />
                    <FormControl
                        name="role"
                        type="Grad oppnådd"
                        placeholder="Rolle"
                        onChange={onChange}
                    />
                    <Button bsStyle="success" onClick={addRoleButton}>Legg til Rolle</Button>
                        <ControlLabel>Skriv litt om deg selv</ControlLabel>
                        <FormControl componentClass="textarea"
                                     name="descriptions"
                                     placeholder="Skriv litt kort om prosjektet"
                                     onChange={onChange}
                        />
                    <Button className={"updateButton"} bsStyle="success" onClick={onClick}>Oppdater</Button>

                </FormGroup>
            </div>
        </div>
    );
}

FormProjects.propTypes = {
    consultant: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FormProjects