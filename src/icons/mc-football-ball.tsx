import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFootballBall = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.84,5.56A4.08,4.08,0,0,0,20.7,3.31h0a4.08,4.08,0,0,0-2.25-1.14A14.45,14.45,0,0,0,2.16,18.44,4.08,4.08,0,0,0,3.3,20.69h0a4.08,4.08,0,0,0,2.25,1.14A13.12,13.12,0,0,0,7.63,22a14.37,14.37,0,0,0,10.11-4.26A14.23,14.23,0,0,0,21.84,5.56ZM4.21,18.37a1.68,1.68,0,0,1-.07-.24A12.21,12.21,0,0,1,7.67,7.67,12.39,12.39,0,0,1,16.37,4a10.44,10.44,0,0,1,1.76.14,1.68,1.68,0,0,1,.24.07L13.44,9.15l-.73-.73a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l.73.73L10.56,12l-.73-.73a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l.73.73Zm12.12-2A12.24,12.24,0,0,1,5.87,19.86a1.68,1.68,0,0,1-.24-.07l4.93-4.94.73.73a1,1,0,1,0,1.42-1.41L12,13.44,13.44,12l.73.73a1,1,0,0,0,.71.29,1,1,0,0,0,.7-1.71l-.73-.73,4.94-4.93a1.68,1.68,0,0,1,.07.24A12.21,12.21,0,0,1,16.33,16.33Z'
    }));
};

export default McFootballBall;