import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McIntercomAlt = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M9.99121,15.00044a.99942.99942,0,0,0,1-1v-8a1,1,0,1,0-2,0v8A.99943.99943,0,0,0,9.99121,15.00044Zm4,0a.99942.99942,0,0,0,1-1v-8a1,1,0,1,0-2,0v8A.99943.99943,0,0,0,13.99121,15.00044Zm-8-2a.99942.99942,0,0,0,1-1v-4a1,1,0,0,0-2,0v4A.99943.99943,0,0,0,5.99121,13.00044Zm14-12h-16a3.00328,3.00328,0,0,0-3,3v16a3.00328,3.00328,0,0,0,3,3h16a3.00328,3.00328,0,0,0,3-3v-16A3.00328,3.00328,0,0,0,19.99121,1.00044Zm1,19a1.00067,1.00067,0,0,1-1,1h-16a1.00067,1.00067,0,0,1-1-1v-16a1.00067,1.00067,0,0,1,1-1h16a1.00067,1.00067,0,0,1,1,1Zm-3.64355-4.5918a8.82089,8.82089,0,0,1-5.35645,1.5918,8.98692,8.98692,0,0,1-5.35644-1.5918,1.00017,1.00017,0,1,0-1.28711,1.53125,10.79981,10.79981,0,0,0,6.64355,2.06055,10.79989,10.79989,0,0,0,6.64356-2.06055,1.00017,1.00017,0,0,0-1.28711-1.53125Zm.64355-8.4082a.99942.99942,0,0,0-1,1v4a1,1,0,1,0,2,0v-4A.99942.99942,0,0,0,17.99121,7.00044Z'
    }));
};

export default McIntercomAlt;