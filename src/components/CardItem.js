import React from "react";
import "../App.css"
import { roteiroFormater } from "../utilis/formatter";

export const CardItem = (props) => {

    const { horario, roteiro } = props.data;

    return (
        <div className="itemCard" style={{ display: 'flex', margin: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="info" style={{ margin: 20 }}>
                <h1 className="display-2">{horario} </h1>
                {roteiroFormater(roteiro)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button style={{ padding: 10, margin: 10 }} type="button" className="btn btn-primary" onClick={() => window.location.href='/localizacao'}>Localizar bus!</button>
                <button style={{ padding: 10, margin: 10 }} type="button" className="btn btn-success">Me notificar!</button>
            </div>

        </div>
    )

}