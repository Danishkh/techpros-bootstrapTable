import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table } from 'react-bootstrap'
import './projectStyling.css'


const ProjectTable = ({consultant, handleDelete, index}) => {
    return (
        <div>
            <Table className="projectsTable" striped bordered condensed hover>
                <thead>
                <tr>
                    <th>Prosjektnavn</th>
                    <th>Ansvar</th>
                    <th>prosjektbeskrivelse</th>
                    <th>rolle</th>
                    <th>Detaljer</th>
                    <th>Slett prosjekt</th>
                </tr>
                </thead>
                <tbody>
                {
                    consultant.projects.map((project) =>
                        <tr>
                            <td>{project.name}</td>
                            <td>{project.responsibilities}</td>
                            <td>{project.descriptionsDetails}</td>
                            <td>{project.role}</td>
                            <td>{project.descriptions}</td>
                            <td>{<Button id={index++} bsStyle="danger" className="delete"
                                         onClick={handleDelete}>Slett</Button>
                            }</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>

    );
}

ProjectTable.propTypes = {
    consultant: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};

export default ProjectTable