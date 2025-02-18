import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFileBlockAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M7,8a1,1,0,0,0,0,2H8A1,1,0,0,0,8,8Zm5,12H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h5V7a3,3,0,0,0,3,3h3v1a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0L11.06,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM12,5.41,14.59,8H13a1,1,0,0,1-1-1Zm8.83,9.76a4.1,4.1,0,0,0-5.66,0,4,4,0,1,0,5.66,0ZM16,18a2,2,0,0,1,2-2,2.09,2.09,0,0,1,.51.07l-2.44,2.44A2.09,2.09,0,0,1,16,18Zm3.41,1.41a2,2,0,0,1-1.91.5l2.43-2.42A2.09,2.09,0,0,1,20,18,2,2,0,0,1,19.41,19.41ZM11,18a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Zm2-6H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z'
    }));
};

export default McFileBlockAlt;