import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McNotebooks = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21,6a1,1,0,0,0-1,1V17a3,3,0,0,1-3,3H7a1,1,0,0,0,0,2H17a5,5,0,0,0,5-5V7A1,1,0,0,0,21,6Zm-3,9V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H15A3,3,0,0,0,18,15ZM10,4h2V8.86l-.36-.3a1,1,0,0,0-1.28,0l-.36.3ZM4,15V5A1,1,0,0,1,5,4H8v7a1,1,0,0,0,1.65.76L11,10.63l1.35,1.13A1,1,0,0,0,13,12a1.06,1.06,0,0,0,.42-.09A1,1,0,0,0,14,11V4h1a1,1,0,0,1,1,1V15a1,1,0,0,1-1,1H5A1,1,0,0,1,4,15Z'
    }));
};

export default McNotebooks;