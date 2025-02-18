import React from 'react';

import {McProps} from "../utils";

/**
 *
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const McShieldPlus = ({color = 'currentColor', size = 24, ...props}: McProps) => {
    return React.createElement('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        width: size,
        height: size,
        viewBox: '0 0 24 24',
        fill: color,
        ...props
    }, React.createElement('path', {
        d: 'M14,11H13V10a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V13h1a1,1,0,0,0,0-2Zm5.63086-7.3501a1.00709,1.00709,0,0,0-.83594-.20263,7.9808,7.9808,0,0,1-6.22265-1.26709.99888.99888,0,0,0-1.14454,0A7.976,7.976,0,0,1,5.20508,3.44727.99971.99971,0,0,0,4,4.42627v7.457A9.01875,9.01875,0,0,0,7.76855,19.207L11.419,21.814a1.0004,1.0004,0,0,0,1.1621,0l3.6504-2.60742A9.01717,9.01717,0,0,0,20,11.8833v-7.457A1.0011,1.0011,0,0,0,19.63086,3.6499ZM18,11.8833a7.0157,7.0157,0,0,1-2.93066,5.6958L12,19.771,8.93066,17.57959A7.01728,7.01728,0,0,1,6,11.8833V5.583a9.95463,9.95463,0,0,0,6-1.39112A9.95463,9.95463,0,0,0,18,5.583Z'
    }));
};

export default McShieldPlus;