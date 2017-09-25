import React from 'react';
import ForesporselListView from './ForesporselListView';

export default class ForesporselModul extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "123",
                    name: "Nav",
                    kontaktEpost: "sjefoveralle@nav.no",
                    kontakt: "Her Nav",
                    status : "ubehandlet",
                    frist : "10.10.2017"
                },
                {
                    id: "12",
                    name: "Sykehuspartner",
                    kontaktEpost: "hallo@syhehuspartner.no",
                    kontakt: "Her A ds Nav",
                    status : "behandles",
                    frist : "11.10.2017"
                },
                {
                    id: "32322",
                    name: "Bedriften",
                    kontaktEpost: "sds@bedriften.no",
                    kontakt: "Sd Adri",
                    status : "sendt",
                    frist : "12.10.2017"
                },
                {
                    id: "32321",
                    name: "Vegvesen",
                    kontaktEpost: "posten2@vegvesen.no",
                    kontakt: "A Jebber",
                    status : "oppdrag",
                    frist : "13.10.2017"
                },
                {
                    id: "32321",
                    name: "Vegvesen",
                    kontaktEpost: "posten@vegvesen.no",
                    kontakt: "Polla veri",
                    status : "ferdigOppdrag",
                    frist : "14.10.2017"
                },
                {
                    id: "232",
                    name: "Bedriften 2",
                    kontaktEpost: "posten@bedriften2.no",
                    kontakt: "A D verdi",
                    status : "avvist",
                    frist : "15.10.2017"
                }
            ]
        }
    }

    render() {
        return (
            <div className="container">
                <ForesporselListView data={this.state.data}/>
            </div>
        );
    }
}
//   <ForesporselListView data={this.state.data}/>
//    {/*<CardList cards={data}/>*/}
