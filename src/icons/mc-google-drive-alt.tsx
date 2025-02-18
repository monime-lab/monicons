import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McGoogleDriveAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M22,14.44a.62.62,0,0,0,0-.13.61.61,0,0,1,0-.12l-.05-.12h0l-6-10.29A1,1,0,0,0,15,3.29H9a1,1,0,0,0-.5.13l-.11.08a.73.73,0,0,0-.09.08.58.58,0,0,0-.1.12s0,0-.06.08h0l-6,10.33a1,1,0,0,0,0,1l3,5.08h0a.83.83,0,0,0,.11.15l0,.06a1.1,1.1,0,0,0,.44.26h0a.83.83,0,0,0,.22,0H18a1,1,0,0,0,.86-.49l3-5.14h0l.05-.12a.61.61,0,0,1,0-.12.53.53,0,0,0,0-.13.51.51,0,0,0,0-.13A.59.59,0,0,0,22,14.44ZM6,17.73l-1.79-3.1L9,6.27l.87,1.5,1,1.66L7,15.91ZM12,11.41l1.26,2.16H10.72Zm5.43,7.3H7.7l1.84-3.14h9.72Zm-1.86-5.14L10.74,5.29h3.69l4.83,8.28Z'
    }));
};

export default McGoogleDriveAlt;