import React from 'react'
import PropTypes from 'prop-types'
import {FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap'
import { DateField } from 'react-date-picker'
import './profileStyling.css'


const FormProfile = ({consultant, onChange, label, onClickUpdate,id}) => {
    return (
        <div className="container">

        <FormGroup controlId={id}>
            <ControlLabel>Fornavn</ControlLabel>
            <FormControl
                    id="Fornavn"
                    type="text"
                    label="Fornavn"
                    name="first_name"
                    placeholder="Fornavn"
                    value={consultant.first_name}
                    onChange={onChange}
                />

            <ControlLabel>Etternavn</ControlLabel>
            <FormControl
                    id="Etternavn"
                    type="text"
                    name="last_name"
                    placeholder="Etternavn"
                    value={consultant.last_name}
                    onChange={onChange}
                />

            <ControlLabel>Tittel</ControlLabel>
            <FormControl
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={consultant.title}
                    onChange={onChange}
                />

            <ControlLabel>Konsulentkategori</ControlLabel>
            <FormControl
                    type="text"
                    name="category"
                    placeholder="Konsulentkategori"
                    value={consultant.category}
                    onChange={onChange}
                />

                    <ControlLabel>Skriv litt om deg selv</ControlLabel>
                    <FormControl componentClass="textarea"
                                 placeholder="Ekstra informasjon"
                                 value={consultant.profile}
                                 onChange={onChange}
                    />
        </FormGroup>
            <Button bsStyle="success" onClick={onClickUpdate}>Oppdater</Button>

        </div>
    );
}

FormProfile.propTypes = {
    consultant: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    date: PropTypes.string.isRequired
};

export default FormProfile
