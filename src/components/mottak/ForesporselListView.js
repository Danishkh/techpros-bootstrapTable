import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

const cellEditProp = {
    mode: 'dbclick',
    blurToSave: true
};

function onAfterDeleteRow(rowKeys) {
    alert('The rowkey you drop: ' + rowKeys);
}

const options = {
    afterDeleteRow: onAfterDeleteRow  // A hook for after droping rows.
};

// If you want to enable deleteRow, you must enable row selection also.
const selectRowProp = {
    mode: 'checkbox'
};

const ForesporselListView = (props) => {
    return(
        <div className="container">
            <h1>Forespørsler</h1>
            <BootstrapTable data={ props.data }
                            options={ { noDataText: 'No data' } }
                            cellEdit={ cellEditProp }
                            insertRow={ true }
                            search={ true } multiColumnSearch={ true }
                            deleteRow={ true } selectRow={ selectRowProp } 
            >
                <TableHeaderColumn dataField='id' isKey>KundeNr</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='kontaktEpost'>epost</TableHeaderColumn>
                <TableHeaderColumn dataField='kontakt'>kontakt</TableHeaderColumn>
                <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
                <TableHeaderColumn dataField='frist' dataSort={true}>Frist</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

export default ForesporselListView;
