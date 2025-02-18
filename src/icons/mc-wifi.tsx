import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McWifi = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M12,15a3,3,0,1,0,3,3A3,3,0,0,0,12,15Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,19Zm0-8a7.06,7.06,0,0,0-4.95,2.05,1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0,5,5,0,0,1,7.08,0,1,1,0,0,0,.7.3A1,1,0,0,0,17,13.05,7.06,7.06,0,0,0,12,11Zm0-4a11.08,11.08,0,0,0-7.78,3.22,1,1,0,0,0,1.42,1.42,9,9,0,0,1,12.72,0,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42A11.08,11.08,0,0,0,12,7Zm10.61.39a15,15,0,0,0-21.22,0A1,1,0,0,0,2.81,8.81a13,13,0,0,1,18.38,0,1,1,0,0,0,1.42,0A1,1,0,0,0,22.61,7.39Z'
    }));
};

export default McWifi;