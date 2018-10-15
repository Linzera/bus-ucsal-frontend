import React from "react";

import '../App.css';
import MainCard from "../components/MainCard";
export default class Home extends React.Component {

    render() {
        return (
            <div className="container centered">
                <div className="col" style={{ marginTop: 50, marginBottom: 50 }}>
                    <MainCard />
                </div>
            </div>
        )
    }

}