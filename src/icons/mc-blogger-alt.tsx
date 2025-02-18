import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McBloggerAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M13.99121,13.00044h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-2h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm6-1.001v-.999a4.004,4.004,0,0,0-4-4h-2a5.00589,5.00589,0,0,0-5,5v4a5.00589,5.00589,0,0,0,5,5h4a5.00589,5.00589,0,0,0,5-5v-1A3.00474,3.00474,0,0,0,15.99121,9.99946Zm0,.001v.001l-1-.001Zm1,4a3.00328,3.00328,0,0,1-3,3h-4a3.00328,3.00328,0,0,1-3-3v-4a3.00328,3.00328,0,0,1,3-3h2a2.0026,2.0026,0,0,1,2,2v1a2.0026,2.0026,0,0,0,2,2,1.00067,1.00067,0,0,1,1,1Zm3-13h-16a3.00328,3.00328,0,0,0-3,3v16a3.00328,3.00328,0,0,0,3,3h16a3.00328,3.00328,0,0,0,3-3v-16A3.00328,3.00328,0,0,0,19.99121,1.00044Zm1,19a1.00067,1.00067,0,0,1-1,1h-16a1.00067,1.00067,0,0,1-1-1v-16a1.00067,1.00067,0,0,1,1-1h16a1.00067,1.00067,0,0,1,1,1Z'
    }));
};

export default McBloggerAlt;