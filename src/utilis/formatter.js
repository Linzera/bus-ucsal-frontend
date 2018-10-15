import React from "react";
import { roteirosTypes } from './consts';

export const roteiroFormater = (roteiro) => {

    let roteiroFormatado = <a>Link</a>;

    switch (roteiro) {

        case roteirosTypes.ROTEIRO:
            roteiroFormatado = <a href="/roteiro/1" className="badge badge-secondary"
                data-toggle="tooltip" data-placement="right" title="Clique para conhecer o roteiro!">Roteiro 1</a>;
            break;
        case roteirosTypes.ROTEIRO2:
            roteiroFormatado = <a href="/roteiro/2" className="badge badge-secondary"
                data-toggle="tooltip" data-placement="right" title="Clique para conhecer o roteiro!">Roteiro 2</a>;
            break;
        case roteirosTypes.ROTEIRO3:
            roteiroFormatado = <a href="/roteiro/3" className="badge badge-secondary"
                data-toggle="tooltip" data-placement="right" title="Clique para conhecer o roteiro!">Roteiro 3</a>;
            break;
        case roteirosTypes.ROTEIRO4:
            roteiroFormatado = <a href="/roteiro/4" className="badge badge-secondary"
                data-toggle="tooltip" data-placement="right" title="Clique para conhecer o roteiro!">Roteiro 4</a>;
            break;
        case roteirosTypes.ROTEIRO5:
            roteiroFormatado = <a href="/roteiro/5" className="badge badge-secondary"
                data-toggle="tooltip" data-placement="right" title="Clique para conhecer o roteiro!">Roteiro 5</a>;
            break;

    }

    return roteiroFormatado;

}