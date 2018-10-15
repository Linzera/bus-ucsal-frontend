import React, { Component } from 'react'
import { fetchHorarios } from '../utilis/api';
import { CardItem } from './CardItem'

export default class MainCard extends Component {

    state = { isIssuing: true, horarioData: [] }

    handleBusInfo = async () => {

        fetchHorarios()
            .then(results => {
                return results.json()
            })
            .then(data => {

                let date = new Date();

                data.map((item) => {

                    let horarioSplitado = item.horario.split(':');
                    let horarioItem = horarioSplitado[0] + horarioSplitado[1];

                    let horarioAtual = `${date.getHours()}${date.getMinutes()}`;

                    if (parseInt(horarioItem) >= parseInt(horarioAtual)) {

                        this.setState(prevState => ({
                            horarioData: [...prevState.horarioData, item]
                        }))

                    }

                })



            }).then(() => {
                this.setState({ isIssuing: false })
            })

    }

    renderBusInfo = () => {

        return this.state.horarioData.map((item) => {
            return <CardItem key={item.horario} data={item} />
        }
        )

    }

    componentDidMount() {
        this.handleBusInfo()
    }


    render() {


        return (
            <div className="card" style={{ display: 'flex', flex: 1, alignItems: 'center', alignItems: 'stretch', textAlign: 'center' }}>
                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', }}>
                    <div className="col" style={{ flex: 0.2 }}>
                        <h3 >Proximos horarios!</h3>
                    </div>
                    <div className="content">
                        {this.state.isIssuing ? <h1>Carregando...</h1> : this.renderBusInfo()}
                    </div>
                </div>
            </div>
        )

    }
}