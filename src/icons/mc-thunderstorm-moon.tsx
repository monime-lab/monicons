import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McThunderstormMoon = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M11.58,16.5H10.32l.86-1.5a1,1,0,1,0-1.73-1L7.72,17a1,1,0,0,0,.86,1.5H9.85L9,20a1,1,0,0,0,1.74,1l1.73-3a1,1,0,0,0,0-1A1,1,0,0,0,11.58,16.5ZM21.7,7.57a1,1,0,0,0-.93-.26,3.2,3.2,0,0,1-.66.08,3,3,0,0,1-3-3,3,3,0,0,1,.08-.65A1,1,0,0,0,16,2.53a4.93,4.93,0,0,0-3.83,4.21A6.24,6.24,0,0,0,10.5,6.5a6,6,0,0,0-5.94,5.13,3.49,3.49,0,0,0-.34,6.62,1,1,0,1,0,.72-1.86A1.5,1.5,0,0,1,5.5,13.5a1,1,0,0,0,1-1,4,4,0,0,1,4-4,3.92,3.92,0,0,1,2.18.66l0,0a4,4,0,0,1,1.57,2,1,1,0,0,0,.78.67,2.33,2.33,0,0,1,.25,4.53,1,1,0,0,0,.27,2,.84.84,0,0,0,.27,0A4.33,4.33,0,0,0,19,14.17a4.23,4.23,0,0,0-.49-2A4.94,4.94,0,0,0,22,8.5,1,1,0,0,0,21.7,7.57Zm-4.59,2.82a2.61,2.61,0,0,1-.42,0A4.6,4.6,0,0,0,16,10a6,6,0,0,0-1.82-2.28c0-.12,0-.25,0-.37a3,3,0,0,1,1.05-2.28,5,5,0,0,0,4.23,4.23A3,3,0,0,1,17.11,10.39Z'
    }));
};

export default McThunderstormMoon;