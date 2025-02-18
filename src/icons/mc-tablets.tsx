import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McTablets = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M20.54,3.46a5,5,0,1,0,0,7.08A5,5,0,0,0,20.54,3.46ZM14.88,4.88A3,3,0,0,1,17,4a3,3,0,0,1,1.28.3l-4,4A3,3,0,0,1,14.88,4.88Zm4.24,4.24a3,3,0,0,1-3.4.58l4-4A3,3,0,0,1,19.12,9.12ZM8,10a5.93,5.93,0,0,0-4.21,1.73l0,0,0,0A6,6,0,0,0,8,22a6,6,0,0,0,4.14-1.66l.12-.08a1.05,1.05,0,0,1,.07-.11A6,6,0,0,0,8,10ZM5.17,18.83A4,4,0,0,1,4.56,14L10,19.44A4,4,0,0,1,5.17,18.83ZM11.44,18,6,12.56A4,4,0,0,1,8,12a4,4,0,0,1,3.44,6Z'
    }));
};

export default McTablets;