import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSwatchbook = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7,16a1,1,0,1,0,1,1A1,1,0,0,0,7,16Zm12.06-4,1.23-1.23a3,3,0,0,0,0-4.24L17.46,3.71a3,3,0,0,0-4.24,0L12,4.94A3,3,0,0,0,9,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A3,3,0,0,0,19.06,12ZM10,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H9a1,1,0,0,1,1,1ZM12,7.76l2.64-2.64a1,1,0,0,1,1.41,0L18.88,8a1,1,0,0,1,0,1.41L16,12.29h0L12,16.24ZM20,19a1,1,0,0,1-1,1H11.82a3.12,3.12,0,0,0,.17-.92L17.07,14H19a1,1,0,0,1,1,1Z'
    }));
};

export default McSwatchbook;