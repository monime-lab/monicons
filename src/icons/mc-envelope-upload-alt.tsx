import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McEnvelopeUploadAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M16,11.08H8a3,3,0,0,0-3,3v5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3v-5A3,3,0,0,0,16,11.08Zm-.42,2L12.7,16a1,1,0,0,1-1.4,0L8.42,13.08Zm1.42,6a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V14.49l2.88,2.88a3,3,0,0,0,4.24,0L17,14.49ZM10.71,5.62,11,5.33V8.08a1,1,0,0,0,2,0V5.33l.29.29a1,1,0,1,0,1.42-1.41l-2-2a1,1,0,0,0-1.42,0l-2,2a1,1,0,0,0,0,1.41A1,1,0,0,0,10.71,5.62Z'
    }));
};

export default McEnvelopeUploadAlt;