import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeQuestion = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16.77,5.37A1,1,0,0,0,18.13,5,1,1,0,0,1,19,4.5a1,1,0,0,1,0,2,1,1,0,0,0,0,2A3,3,0,1,0,16.4,4,1,1,0,0,0,16.77,5.37ZM21,13.5a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V8.91L9.88,14.8a3,3,0,0,0,4.24,0l1.64-1.64a1,1,0,1,0-1.42-1.42L12.7,13.38a1,1,0,0,1-1.4,0L5.41,7.5H13a1,1,0,0,0,0-2H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-4A1,1,0,0,0,21,13.5ZM18.29,9.79a1,1,0,0,0,0,1.42l.15.12a.76.76,0,0,0,.18.09.64.64,0,0,0,.18.06l.2,0a1,1,0,0,0,.71-1.71A1,1,0,0,0,18.29,9.79Z'
    }));
};

export default McEnvelopeQuestion;