import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McPizzaSlice = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M8.51,12.48a1,1,0,1,0,1,1A1,1,0,0,0,8.51,12.48ZM8.51,8a1,1,0,1,0,1,1A1,1,0,0,0,8.51,8ZM12,10a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm8.5-1.43,0,0a3,3,0,0,0-2.3-.29,2.9,2.9,0,0,0-1.09.56L5.51,2.13a1,1,0,0,0-1,0A1,1,0,0,0,4,3V16.17A2.94,2.94,0,0,0,2,19H2a3,3,0,0,0,2.92,3h.58a18.57,18.57,0,0,0,16.11-9.41A3,3,0,0,0,20.51,8.57ZM6,4.73l9.89,5.71A12.57,12.57,0,0,1,6,16Zm13.87,6.88A16.58,16.58,0,0,1,5,20a1,1,0,0,1-1-1,1,1,0,0,1,.3-.72A1,1,0,0,1,5,18h.51a14.5,14.5,0,0,0,12.62-7.37.9.9,0,0,1,.58-.44,1,1,0,0,1,.75.09h0A1,1,0,0,1,19.88,11.61Z'
    }));
};

export default McPizzaSlice;