import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCompressArrows = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M10.38,13.08A1,1,0,0,0,10,13H6a1,1,0,0,0,0,2H7.59l-5.3,5.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,16.41V18a1,1,0,0,0,2,0V14a1,1,0,0,0-.08-.38A1,1,0,0,0,10.38,13.08ZM10,5A1,1,0,0,0,9,6V7.59L3.71,2.29A1,1,0,0,0,2.29,3.71L7.59,9H6a1,1,0,0,0,0,2h4a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,11,10V6A1,1,0,0,0,10,5Zm3.62,5.92A1,1,0,0,0,14,11h4a1,1,0,0,0,0-2H16.41l5.3-5.29a1,1,0,1,0-1.42-1.42L15,7.59V6a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38A1,1,0,0,0,13.62,10.92ZM16.41,15H18a1,1,0,0,0,0-2H14a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,13,14v4a1,1,0,0,0,2,0V16.41l5.29,5.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
    }));
};

export default McCompressArrows;