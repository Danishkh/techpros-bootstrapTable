import React from 'react';

/*const Card = (props) => {
    return (
        <div>
           <div>props.id</div>
            <div>props.name</div>
        </div>
    );
}


const CardList = (props) => {
    return (
        <div>
            <div>props.id</div>
            <div>props.name</div>
        </div>
    );
}*/


export default class CardList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id : "0023212",
                    name : "Tore Gard Andersen",
                    Address : "Addresse 1"
                },
                {
                    id : "0023fd",
                    name : "navn 2",
                    Address : "Addresse 2"
                }
            ]
        };
    }

    render() {
        return (
            <div>
                hallo
            </div>
        );
    }
}


/*
  {this.props.cards.map(card => <Card {...card} /> ) }
 */
