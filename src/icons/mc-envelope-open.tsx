import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeOpen = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20.21,8.82h0l0,0h0L14,2.78a2.83,2.83,0,0,0-3.9,0l-6.21,6h0v0A2.6,2.6,0,0,0,3,10.71v8.58A2.75,2.75,0,0,0,5.78,22H18.22A2.75,2.75,0,0,0,21,19.29V10.71A2.67,2.67,0,0,0,20.21,8.82Zm-8.77-4.6a.83.83,0,0,1,1.12,0L18,9.5l-5.47,5.28a.83.83,0,0,1-1.12,0L6,9.5ZM19,19.29a.76.76,0,0,1-.78.71H5.78A.76.76,0,0,1,5,19.29V11.35l4.05,3.9-1.66,1.6a1,1,0,0,0,0,1.41,1,1,0,0,0,.72.31,1,1,0,0,0,.69-.28l1.77-1.7a2.8,2.8,0,0,0,2.92,0l1.77,1.7a1,1,0,0,0,.69.28,1,1,0,0,0,.72-.31,1,1,0,0,0,0-1.41L15,15.25l4-3.9Z'
    }));
};

export default McEnvelopeOpen;