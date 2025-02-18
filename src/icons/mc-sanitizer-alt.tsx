import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McSanitizerAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14,15H12a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm2-7V5a1,1,0,0,0-1-1H14V3h1a1,1,0,0,0,0-2H10.23584A4.593,4.593,0,0,0,6.10547,3.55273a1.00012,1.00012,0,0,0,1.78906.89454A2.60342,2.60342,0,0,1,10.23584,3H12V4H11a1,1,0,0,0-1,1V8a3.00328,3.00328,0,0,0-3,3v9a3.00328,3.00328,0,0,0,3,3h6a3.00328,3.00328,0,0,0,3-3V11A3.00328,3.00328,0,0,0,16,8ZM12,6h2V8H12Zm5,14a1.0013,1.0013,0,0,1-1,1H10a1.0013,1.0013,0,0,1-1-1V11a1.0013,1.0013,0,0,1,1-1h6a1.0013,1.0013,0,0,1,1,1Z'
    }));
};

export default McSanitizerAlt;