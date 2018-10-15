import React from 'react';
import Map from '../components/Map'

export default class Localizacao extends React.Component {

    render() {
        return (
            <div style={{ justifyContent: 'center', alignItems: 'center' }}><Map google={window.google} /></div>
        )
    }

}