import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCrockery = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M18,12.15V3a1,1,0,0,0-2,0v9.15a4.16,4.16,0,0,0-3,4c0,2.05,1.52,5.8,4,5.8s4-3.75,4-5.8A4.16,4.16,0,0,0,18,12.15ZM17,20c-.8,0-2-2.27-2-3.8A2.11,2.11,0,0,1,17,14a2.11,2.11,0,0,1,2,2.2C19,17.73,17.8,20,17,20ZM10,2A1,1,0,0,0,9,3V8.46L8,9.13V3A1,1,0,0,0,6,3V9.13L5,8.46V3A1,1,0,0,0,3,3V9a1,1,0,0,0,.45.83L6,11.54V21a1,1,0,0,0,2,0V11.54l2.55-1.71A1,1,0,0,0,11,9V3A1,1,0,0,0,10,2Z'
    }));
};

export default McCrockery;