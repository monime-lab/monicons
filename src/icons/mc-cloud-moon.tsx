import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McCloudMoon = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M21.7,9.07a1,1,0,0,0-.93-.26,3.13,3.13,0,0,1-.66.08,3,3,0,0,1-3-3,3.13,3.13,0,0,1,.08-.66,1,1,0,0,0-.26-.93A1,1,0,0,0,16,4a4.93,4.93,0,0,0-3.83,4.21A6.24,6.24,0,0,0,10.5,8a6,6,0,0,0-5.94,5.13A3.5,3.5,0,0,0,5.5,20h9.17A4.33,4.33,0,0,0,19,15.67a4.23,4.23,0,0,0-.49-2A4.94,4.94,0,0,0,22,10,1,1,0,0,0,21.7,9.07Zm-7,8.93H5.5a1.5,1.5,0,0,1,0-3,1,1,0,0,0,1-1,4,4,0,0,1,6.18-3.34l0,0a3.94,3.94,0,0,1,1.57,2,1,1,0,0,0,.78.67A2.33,2.33,0,0,1,14.67,18Zm2.44-6.11a2.61,2.61,0,0,1-.42,0,4.6,4.6,0,0,0-.72-.31,6.06,6.06,0,0,0-1.82-2.28c0-.12,0-.25,0-.37a3,3,0,0,1,1.05-2.28,5,5,0,0,0,4.23,4.23A3,3,0,0,1,17.11,11.89Z'
    }));
};

export default McCloudMoon;