import React from 'react'


const HeaderApp = () => (
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container d-flex justify-content-between">
      <a className="navbar-brand d-flex align-items-center">
        <strong className="text-light">Bus Ucsal</strong>
      </a>
      <a href="/" className="navbar-brand d-flex align-items-center">
        <strong className="text-light">Informacoes</strong>
      </a>
      <a href="/localizacao" className="navbar-brand d-flex align-items-center">
        <strong className="text-light">Localizacao do bus</strong>
      </a>
    </div>
  </div>
)

export default HeaderApp