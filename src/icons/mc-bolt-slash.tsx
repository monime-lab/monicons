import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBoltSlash = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8.67,4.23A1,1,0,0,0,9.6,4h5.1L13.43,8.74a1,1,0,0,0,.17.87,1,1,0,0,0,.79.39H18l-1.13,1.24a1,1,0,0,0,.07,1.41,1,1,0,0,0,.67.26,1,1,0,0,0,.74-.33L21,9.67A1,1,0,0,0,20.23,8H15.69L17,3.26a1,1,0,0,0-.18-.87A1,1,0,0,0,16,2H9a1,1,0,0,0-1,.74L8,3A1,1,0,0,0,8.67,4.23Zm13,16.06-18-18A1,1,0,0,0,2.29,3.71L6.61,8,5.35,12.74a1,1,0,0,0,.18.87,1,1,0,0,0,.79.39h3.84L8.35,20.74a1,1,0,0,0,.49,1.14,1,1,0,0,0,.48.12,1,1,0,0,0,.74-.33l4.85-5.34,5.38,5.38a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM7.62,12l.63-2.34L10.59,12Zm3.73,5.28,1-3.56,1.2,1.19Z'
    }));
};

export default McBoltSlash;