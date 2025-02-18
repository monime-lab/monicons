import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileContractDollar = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.71,20.29,20,18.56c0-.11,0-.21,0-.31a2.75,2.75,0,0,0-2.75-2.75h-.34l-1.44-1.44a.67.67,0,0,1,.28-.06H19a1,1,0,0,0,0-2H17.5V11a1,1,0,0,0-2,0v1a2.74,2.74,0,0,0-1.47.59l-1.32-1.33a1,1,0,0,0-1.42,1.42L13,14.44c0,.11,0,.21,0,.31a2.75,2.75,0,0,0,2.75,2.75h.34l1.44,1.44a.67.67,0,0,1-.28.06H14a1,1,0,0,0,0,2h1.5v1a1,1,0,0,0,2,0V21A2.74,2.74,0,0,0,19,20.38l1.32,1.33a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM10,19H5a1,1,0,0,1-1-1V4A1,1,0,0,1,5,3h6V7a1,1,0,0,0,1,1h5a1,1,0,0,0,.92-.62,1,1,0,0,0-.21-1.09l-5-5h0a1.07,1.07,0,0,0-.28-.19l-.09,0A1.31,1.31,0,0,0,12.06,1H5A3,3,0,0,0,2,4V18a3,3,0,0,0,3,3h5a1,1,0,0,0,0-2ZM13,4.41,14.59,6H13Z'
    }));
};

export default McFileContractDollar;