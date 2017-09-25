import React from 'react';
import {BootstrapTable, TableHeaderColumn, InsertButton  } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

const ExpertiseTable = ({knowledges, cellEditProp, selectRowProp, options, remote}) => {
    return (
        <div className="container">
            <BootstrapTable data={ knowledges }
                            options={ options }
                            cellEdit={ cellEditProp }
                            remote={true}
                            insertRow={ true }
                            search={ true } multiColumnSearch={ true }
                            deleteRow={ true }
                            selectRow={ selectRowProp }
            >
                <TableHeaderColumn dataField='name' isKey>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
            </BootstrapTable>

        </div>
    );
}

export default ExpertiseTable
