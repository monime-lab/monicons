import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeShare = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V9.41L8.88,15.3a3,3,0,0,0,2.11.87,3.08,3.08,0,0,0,2.16-.9l1.72-1.72a1,1,0,1,0-1.42-1.42L11.7,13.88a1,1,0,0,1-1.4,0L4.41,8H10a1,1,0,0,0,0-2H4A3,3,0,0,0,1,9V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V15A1,1,0,0,0,20,14Zm0-6a2,2,0,0,0-1.18.39l-1.75-.8L19,6.71A2,2,0,0,0,20,7a2,2,0,1,0-2-2l-1.9.87A2,2,0,0,0,15,5.5a2,2,0,0,0,0,4,1.88,1.88,0,0,0,.92-.24l2.1,1A2,2,0,1,0,20,8Z'
    }));
};

export default McEnvelopeShare;