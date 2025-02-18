import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McThermometer = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16.29,6.29l-7,7a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7-7a1,1,0,1,0-1.42-1.42Zm4.25-2.83a5,5,0,0,0-7.08,0L5.29,11.69a1,1,0,0,0-.29.7v5.19L2.29,20.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L6.42,19h5.19a1,1,0,0,0,.7-.29l8.23-8.17A5,5,0,0,0,20.54,3.46ZM19.12,9.12,11.2,17H7V12.8l7.88-7.92a3,3,0,0,1,4.24,4.24Z'
    }));
};

export default McThermometer;