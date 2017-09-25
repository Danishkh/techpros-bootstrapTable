import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table } from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import './educationStyling.css'


const EduTable = ({consultant, handleDelete, index}) => {
    return (

        <Table className="eduTable" striped bordered condensed hover>


    </Table>

    );
}

EduTable.propTypes = {
    consultant: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};

export default EduTable