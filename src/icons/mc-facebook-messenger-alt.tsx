import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McFacebookMessengerAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M11.99121,1.00044a10.61443,10.61443,0,0,0-11,10.70019,10.46132,10.46132,0,0,0,3.41406,7.86524L4.457,21.2563a1.79959,1.79959,0,0,0,1.79883,1.74316,1.81992,1.81992,0,0,0,.72656-.15234l1.9209-.84668a11.89548,11.89548,0,0,0,3.08789.40039,10.61525,10.61525,0,0,0,11.001-10.7002A10.61525,10.61525,0,0,0,11.99121,1.00044Zm0,19.40039a9.86205,9.86205,0,0,1-2.63476-.35059,1.79856,1.79856,0,0,0-1.19629.0918l-1.71387.75586-.04492-1.49316a1.80968,1.80968,0,0,0-.60157-1.27442,8.4876,8.4876,0,0,1-2.80859-6.42969,8.65949,8.65949,0,0,1,9-8.70019,8.70522,8.70522,0,1,1,0,17.40039ZM15.72559,8.5854l-2.3125,2.75488L10.06641,9.28364a.99809.99809,0,0,0-1.28907.21L5.72559,13.13032a.99955.99955,0,1,0,1.53125,1.28516l2.498-2.97559,3.34668,2.05567a.99823.99823,0,0,0,1.28906-.209l2.86622-3.416A.99955.99955,0,1,0,15.72559,8.5854Z'
    }));
};

export default McFacebookMessengerAlt;