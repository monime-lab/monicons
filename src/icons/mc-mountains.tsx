import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McMountains = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.85,17.47l-5-8a1,1,0,0,0-1.7,0l-1,1.63L10.86,5.5a1,1,0,0,0-1.72,0l-7,12A1,1,0,0,0,3,19H21a1,1,0,0,0,.85-1.53ZM10.45,17H4.74L10,8l2.93,5Zm2.35,0L15,13.57h0L16,11.89,19.2,17Z'
    }));
};

export default McMountains;