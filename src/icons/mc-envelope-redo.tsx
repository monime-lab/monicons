import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeRedo = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20.5,14.26a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.67l5.88,5.88a3,3,0,0,0,2.11.88,3,3,0,0,0,2.16-.91,1,1,0,0,0,0-1.39,1,1,0,0,0-1.43,0,1,1,0,0,1-1.4,0L4.91,8.26H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3v-4A1,1,0,0,0,20.5,14.26Zm1-11a1,1,0,0,0-1,1h0a5,5,0,1,0-3,9A5,5,0,0,0,20.8,12a1,1,0,0,0-1.32-1.51,3,3,0,1,1,.25-4.24H18.5a1,1,0,0,0,0,2h3a1,1,0,0,0,1-1v-3A1,1,0,0,0,21.5,3.26Z'
    }));
};

export default McEnvelopeRedo;